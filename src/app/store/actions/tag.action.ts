import { StandardAction } from './common';
import { Tag } from './../../model';

export class AddTag extends StandardAction<Tag>  { }
export class TagAdded extends StandardAction<Tag> { }
export class UpdateTag extends StandardAction<Tag> { }
export class TagUpdated extends StandardAction<Tag> { }
export class DeleteTag extends StandardAction<Tag> { }
export class TagDeleted extends StandardAction<Tag> { }
export class ArchiveTag extends StandardAction<Tag> { }
export class TagArchived extends StandardAction<Tag> { }


export class FetchTag extends StandardAction<Tag> { }
export class FetchTagSuccess extends StandardAction<Tag[]> { }

export type TagActionsType = TagAdded
    | FetchTagSuccess;