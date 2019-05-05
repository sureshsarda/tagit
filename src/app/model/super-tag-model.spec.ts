import { Item } from 'src/app/model';
import { SuperTag, QueryComponent, DateRangeQuery } from './super-tag.model';
import * as moment from 'moment';

describe('Model: SuperTag: DateRangeQuery', () => {

    let query: DateRangeQuery;

    beforeEach(() => {
        query = new DateRangeQuery().deserialize(JSON.parse(`{
            "gte": ["startOf", "day"],
            "lte": ["endOf", "day"],
            "relativeTo": "now"
        }`));
    });

    it('should parse query correctly', () => {
        expect(query.gte).toBeDefined();
        expect(query.lte).toBeDefined();
    });

    it('should filter properly', () => {
        const inRange: Item = { description: 'Item 1', duedate: moment().toDate() };
        const beforeRange: Item = { description: 'Item 1', duedate: moment().add(7, 'd').toDate() };
        const afterRange: Item = { description: 'Item 1', duedate: moment().subtract(7, 'd').toDate() };

        expect(query.passes(inRange)).toBeTruthy();
        expect(query.passes(beforeRange)).toBeFalsy();
        expect(query.passes(afterRange)).toBeFalsy();
    });
});


describe('Model: SuperTag: Helper', () => {

    let tag: SuperTag;

    beforeEach(() => {
        const query = JSON.parse(`
        {
            "queries": {
                "today": {
                    "date_range": {
                        "gte": ["startOf", "day"],
                        "lte": ["endOf", "day"]
                    }
                },
                "tomorrow": {
                    "date_range": {
                        "gte": [
                            ["add", "1", "day"],
                            ["startOf", "day"]
                        ],
                        "lte": [
                            ["add", "1", "day"],
                            ["endOf", "day"]
                        ]
                    }
                }
            }
        }`);
        tag = new SuperTag().deserialize(query);
    });

    it('should parse correctly', () => {

        const tomorrowStart = moment().add(1, 'day').startOf('day');
        tag.queries['tomorrow'].date_range.gte.isSame(tomorrowStart);

        const tomorrowEnd = moment().add(1, 'day').endOf('day');
        tag.queries['tomorrow'].date_range.lte.isSame(tomorrowEnd);
    });

    it('should bucket properly', () => {
        const items: Item[] = [
            { description: 'Task Today', duedate: moment().toDate() },
            { description: 'Task Tomorrow 1', duedate: moment().add(1, 'd').toDate() },
            { description: 'Task Yesterday 1', duedate: moment().subtract(1, 'd').toDate() },
            { description: 'Task Tomorrow 2', duedate: moment().add(1, 'd').toDate() },
        ];

        const buckets = tag.bucket(items);
        expect(buckets['today'].length).toBe(1);
        expect(buckets['tomorrow'].length).toBe(2);
    });
});
