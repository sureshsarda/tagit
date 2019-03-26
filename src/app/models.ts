export interface Item {
    id?: string;
    name: string;

    updatedAt: Date;
    createdAt: Date;
    archivedAt?: Date;
    deletedAt?: Date;

    next?: Item;
    previous?: Item;
}

export interface ItemCollection {
    items?: Item[];
}