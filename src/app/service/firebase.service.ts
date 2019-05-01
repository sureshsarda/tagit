import { Item, Tag } from './../models';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import 'firebase/firestore'
import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


class ResultStub {
    status: string;
    data: object | [];
}
@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    db = firebase.firestore();

    itemsRef: firebase.firestore.CollectionReference;

    userId = '1';

    constructor(private http: HttpClient) {
        this.itemsRef = this.db.collection('users').doc('suresh').collection('items');
    }

    private get url() {
        return 'http://127.0.0.1:8080/user/' + this.userId;
    }

    private makeRequest<T>(url): Promise<T> {
        return this.http.get(url).toPromise().then(
            (result: ResultStub) => {
                console.log(result);
                return (result.data as any) as T;
            });
    }

    getItems(payload?: any): Promise<Item[]> {
        console.log('Fetching items in service...');
        return this.makeRequest<Item[]>('http://127.0.0.1:8080/user/' + this.userId + '/task');
    }

    getTags(payload?: any): Promise<Tag[]> {
        console.log('Fetching items in service...');
        return this.makeRequest<Item[]>('http://127.0.0.1:8080/user/' + this.userId + '/tag');
    }

    addItem(item: Item): Promise<Item> {
        return this.http.post(this.url + '/task', {
            description: item.description,
        }).toPromise().then(
            (result: ResultStub) => {
                return result.data as Item;
            }
        );
    }

    updateItem(param: Item): Promise<Item> {
        const updatable = ['duedate', 'completed_at', 'deleted_at', 'description'];
        const payload = {}
        Object.keys(param).forEach(k => {
            if (updatable.indexOf(k) > -1) {
                payload[k] = param[k];
            }
        });

        return this.http.patch(this.url + '/task/' + param.id, payload).toPromise()
            .then((result: ResultStub) => {
                return result.data as Item;
            });
    }


    deleteItem(param: Item): Promise<Item> {
        param.deleted_at = new Date();
        return this.updateItem(param);
    }

    archiveItem(param: Item): Promise<Item> {
        param.completed_at = new Date();
        return this.updateItem(param);
    }
}
