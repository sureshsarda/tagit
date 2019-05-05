export interface Tag {
    id?: string;
    description: string;

    color?: string;
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