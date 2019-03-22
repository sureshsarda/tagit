export interface Item {
    id?: string;
    name: string;
    createdAt: Date;
    archivedAt?: Date;

    next?: Item;
    previous?: Item;
}

export interface ItemCollection {
    items?: Item[];
}