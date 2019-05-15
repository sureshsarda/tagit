import { StandardAction, DualClassAction } from './common';
import { Item, Tag } from './../../model';

export class AddItem extends StandardAction<Item>  { }
export class ItemAdded extends StandardAction<Item> { }
export class UpdateItem extends StandardAction<Item> { }
export class ItemUpdated extends StandardAction<Item> { }
export class DeleteItem extends StandardAction<Item> { }
export class ItemDeleted extends StandardAction<Item> { }
export class ArchiveItem extends StandardAction<Item> { }
export class ItemArchived extends StandardAction<Item> { }
export class AddTagToItem extends DualClassAction<Item, Tag> { }
export class TagAddedToItem extends StandardAction<Item> { }
export class RemoveTagFromItem extends DualClassAction<Item, Tag> { }
export class TagRemovedFromItem extends StandardAction<Item> { }


export class FetchItem extends StandardAction<Item> { }
export class FetchItemSuccess extends StandardAction<Item[]> { }

export type ItemActionsType = ItemAdded
    | FetchItemSuccess;
