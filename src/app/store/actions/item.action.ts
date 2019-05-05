import { StandardAction } from './common';
import { Item } from './../../model';

export class AddItem extends StandardAction<Item>  { }
export class ItemAdded extends StandardAction<Item> { }
export class UpdateItem extends StandardAction<Item> { }
export class ItemUpdated extends StandardAction<Item> { }
export class DeleteItem extends StandardAction<Item> { }
export class ItemDeleted extends StandardAction<Item> { }
export class ArchiveItem extends StandardAction<Item> { }
export class ItemArchived extends StandardAction<Item> { }


export class FetchItem extends StandardAction<Item> { }
export class FetchItemSuccess extends StandardAction<Item[]> { }

export type ItemActionsType = ItemAdded
    | FetchItemSuccess;
