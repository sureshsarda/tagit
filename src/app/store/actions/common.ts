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

export class DualClassAction<T, V> implements Action {

    readonly type;
    primary: any;
    secondary: any;

    constructor(primary?: T, secondary?: V) {
        this.primary = primary;
        this.secondary = secondary;
        this.type = this.constructor['type'];
    }

    static get type(): string {
        return `Action ${this.name}`;
    }
}