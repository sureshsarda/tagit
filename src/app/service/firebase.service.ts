import { Item } from './../models';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import 'firebase/firestore'
import { Observable, from } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

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
                const response = result.docs.map(it => ({
                    id: it.id,
                    name: it.data().name,
                    createdAt: it.data().createdAt
                })
                );
                return response;
            }
        ));
    }

    addItem(param: { name: string }): Observable<Item> {
        const createdAt = new Date();
        return from(this.itemsRef.add({
            name,
            createdAt
        }).then(
            (docReference: firebase.firestore.DocumentReference) => {
                const item: Item = {
                    id: docReference.id,
                    name,
                    createdAt
                }
                return item;
            }
        ))
    }

    updateItem(param: Item): Observable<Item> {
        const updatedAt = new Date();
        return from(this.itemsRef.doc(param.id).set({
            name: param.name,
            archivedAt: updatedAt
        }).then(
            docReference => {
                const item: Item = {
                    id: param.id,
                    archivedAt: updatedAt,
                    createdAt: param.createdAt,
                    name: param.name
                }
                return item;
            }
        ))
    }
}
