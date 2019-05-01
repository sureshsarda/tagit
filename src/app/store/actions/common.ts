import { Action } from '@ngrx/store';

export class StandardAction<T> implements Action {

    readonly type;
    payload: any;

    constructor(payload?: T) {
        this.payload = payload;
        this.type = this.constructor['type'];
    }

    static get type(): string {
        return `Action ${this.name}`;
    }
}