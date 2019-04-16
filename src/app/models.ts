export interface Tag {
    id?: string;
    name: string;
}

export interface Item {
    id?: string;
    name: string;

    updatedAt: Date;
    createdAt: Date;
    archivedAt?: Date;
    deletedAt?: Date;

    next?: Item;
    previous?: Item;

    tags?: Tag[];
}

export interface ItemCollection {
    items?: Item[];
}