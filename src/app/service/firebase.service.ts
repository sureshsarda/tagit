import { Item } from './../models';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import 'firebase/firestore'
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    db = firebase.firestore();

    itemsRef: firebase.firestore.CollectionReference;

    constructor() {
        this.itemsRef = this.db.collection('users').doc('suresh').collection('items');
    }

    getItems(): Observable<Item[]> {
        const itemsSnapshot = this.itemsRef.get();

        return from(itemsSnapshot.then(
            (result) => {
                console.log(result.docs);
                const response = result.docs.map(it => {
                    const data = it.data();
                    data['id'] = it.id;
                    return data as Item;
                });
                return response;
            }
        ));
    }

    addItem(item: Item): Observable<Item> {
        item.createdAt = new Date();
        item.updatedAt = new Date();

        return from(this.itemsRef.add(item).then(
            (docReference: firebase.firestore.DocumentReference) => {
                item.id = docReference.id;
                return item;
            }
        ));
    }

    updateItem(param: Item): Observable<Item> {
        const updatedAt = new Date();
        return from(this.itemsRef.doc(param.id).set({
            name: param.name,
            updatedAt
        }).then(
            docReference => {
                return param;
            }
        ));
    }

    deleteItem(param: Item): Observable<Item> {
        return this._updateField('deletedAt', new Date(), param);
    }

    archiveItem(param: Item): Observable<Item> {
        return this._updateField('archivedAt', new Date(), param);
    }

    private _updateField(fieldname: string, value: object, item: Item): Observable<Item> {
        const newObject: Item = { ...item };
        const id = item.id;
        delete newObject.id;
        // Object.keys(item).forEach(key => {
        //     if (key !== 'id') {
        //         newObject[key] = item[key];
        //     }
        // });
        newObject[fieldname] = value;

        return from(this.itemsRef.doc(id).set(newObject).then(
            docReference => {
                newObject['id'] = id;
                return newObject;
            }));
    }
}
