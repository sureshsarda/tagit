import { SuperTag } from './super-tag.model';
export interface Tag {
    id?: string;
    description: string;

    color?: string;

    super?: SuperTag;
    favorite?: boolean;
}

export class TagImpl implements Tag {
    id?: string;
    description: string;
    color?: string;
    super?: SuperTag;
    favorite?: boolean;



}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginSuccessful {
    token: string;
}

export interface SignUpRequest {
    username: string;
    password: string;
    name: string;
}

export interface SignUpSuccessful {
    token: string;
}


export interface RequestFailed {
    error: string;
}

export interface Item {
    id?: string;
    description: string;

    duedate?: Date;
    updatedAt?: Date;
    createdAt?: Date;
    completed_at?: Date;
    deleted_at?: Date;

    next?: Item;
    previous?: Item;

    tags?: Tag[];
}

export function itemAscByDueDate(a: Item, b: Item): number {

    const aDue = new Date(a.duedate);
    const bDue = new Date(b.duedate);

    return aDue.toISOString().localeCompare(bDue.toISOString());
}


export interface ItemCollection {
    items?: Item[];
}

export interface DateRange {
    start: Date;
    end: Date;
}

export class FilterView {

    items: Item[];

    constructor(items: Item[]) {
        this.items = items;
    }

    withTags(tags: Tag[]) {

    }

    withRange() {

    }

    completed() {

    }

    deleted() {

    }

}

export class Filters {

    static apply(items: Item[], tagSet?, range?: DateRange[]) {
        if (tagSet && tagSet.size) {
            const filtered = [];
            items.forEach((it: Item) => {
                const present = it.tags.map(t => t.id).filter(t => tagSet.has(t));
                if (present && present.length) {
                    filtered.push(it);
                }
            });
            return filtered;
        }
        return items;

    }
}