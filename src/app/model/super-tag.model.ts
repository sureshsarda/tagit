import { Item } from './../model';
import * as moment from 'moment';

export interface Filterable {

    passes(item: Item): boolean;
}

export interface Serializable<T> {

    deserialize(input: object): T;
}


export class DateRangeQuery implements Filterable, Serializable<DateRangeQuery> {

    gte: moment.Moment;
    lte: moment.Moment;

    private _convert_to_2d(arr: string[] | string[][]): string[][] {
        if (Array.isArray(arr[0])) {
            return arr as string[][];
        } else {
            const newArr: string[][] = [];
            newArr.push(arr as string[]);
            return newArr;
        }
    }

    private applyMomentOperations(ops: string[][]): moment.Moment {
        const base = moment();
        ops.forEach(it => {
            base[it[0]].apply(base, it.slice(1));
        });
        return base;
    }

    private _parse_and_init(gte: string[] | string[][], lte: string[] | string[][]) {
        if (gte && lte) {
            const _gte: string[][] = this._convert_to_2d(gte);
            const _lte: string[][] = this._convert_to_2d(lte);
            const offset = moment();

            // here gte and lte are both 2D arrays
            this.gte = this.applyMomentOperations(_gte);
            this.lte = this.applyMomentOperations(_lte);
        } else {
            throw new TypeError('Invalid parameters');
        }
    }


    passes(item: Item): boolean {
        if (item.duedate) {
            return moment(item.duedate).isBetween(this.gte, this.lte);
        }
        return false;
    }

    deserialize(json: { gte: string[] | string[][], lte: string[] }): DateRangeQuery {
        this._parse_and_init(json.gte, json.lte);
        return this;
    }

}


export class PatternQuery implements Serializable<PatternQuery>, Filterable {

    pattern: string;

    deserialize(json: { pattern: string }): PatternQuery {
        this.pattern = json.pattern;
        return this;
    }
    passes(item: Item): boolean {
        return item.description.match(new RegExp(this.pattern, 'i')).index > -1;
    }
}

export class TagsQuery implements Serializable<TagsQuery>, Filterable {

    tags = new Set();

    deserialize(json: object): TagsQuery {
        this.tags = new Set(json as string[]);
        return this;
    }
    passes(item: Item): boolean {
        return item.tags.map(it => it.description).some(it => this.tags.has(it));
    }
}

export class QueryComponent implements Serializable<QueryComponent>, Filterable {

    date_range?: DateRangeQuery;
    pattern_match?: PatternQuery;
    terms?: TagsQuery;

    must?: QueryComponent[];
    should?: QueryComponent[];

    passes(item: Item): boolean {
        if (this.date_range) {
            return this.date_range.passes(item);
        } else if (this.pattern_match) {
            return this.pattern_match.passes(item);
        } else if (this.must) {
            return this.must.every(it => it.passes(item));
        } else if (this.should) {
            return this.should.some(it => it.passes(item));
        } else {
            this.terms.passes(item);
        }
    }
    deserialize(json: object): QueryComponent {
        const keys = Object.keys(json);
        if (keys.length !== 1) {
            throw new TypeError('Only one query is supported in QueryComponent. Found: ' + keys);
        }

        const key = keys[0];
        switch (key) {
            case 'date_range':
                this.date_range = new DateRangeQuery().deserialize(json['date_range']);
                break;
            case 'pattern_match':
                this.pattern_match = new PatternQuery().deserialize(json['pattern_match']);
                break;
            case 'terms':
                this.terms = new TagsQuery().deserialize(json['terms']);
                break;
            case 'must':
                this.must = json['must'].map(it => new QueryComponent().deserialize(it));
                break;
            case 'should':
                this.should = json['should'].map(it => new QueryComponent().deserialize(it));
                break;
            default:
                throw new TypeError('Unknown parameter found');
        }
        return this;
    }
}

export class SuperTag implements Serializable<SuperTag>, Filterable {
    queries: { [id: string]: QueryComponent } = {};
    sequence: string[];

    bucket(items: Item[]) {
        const bucket = {};
        Object.keys(this.queries).forEach(key => {
            const qComponent = this.queries[key];
            bucket[key] = items.filter(it => qComponent.passes(it));
        });
        return bucket;
    }

    passes(item: Item): boolean {
        return Object.values(this.queries).some(it => it.passes(item));
    }
    deserialize(json: { queries?: object, sequence: string[] }): SuperTag {
        Object.keys(json.queries).forEach(key => {
            this.queries[key] = new QueryComponent().deserialize(json.queries[key]);
        });
        this.sequence = json.sequence;
        return this;
    }
}
