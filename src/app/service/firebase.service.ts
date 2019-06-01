import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, SuperTag, Tag } from './../model';
import { environment } from 'src/environments/environment';


class ResultStub {
    status: string;
    data: object | [];
}
@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(private http: HttpClient) {
    }

    private get userId(): string {
        return localStorage.getItem('user_id');
    }

    private get url() {
        return environment.backendURL + '/user/' + this.userId;
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
        return this.makeRequest<Item[]>(this.url + '/task');
    }

    getTags(payload?: any): Promise<Tag[]> {
        console.log('Fetching items in service...');
        return this.makeRequest<Tag[]>(this.url + '/tag').then(
            (tags: Tag[]) => {
                // tags.push(this.dailyAgendaTag());
                // tags.push(this.weeksViewTag());
                return tags;
            }
        );
    }

    weeksViewTag(): Tag {
        return {
            id: '999',
            color: '#AFAF33',
            favorite: true,
            description: "Week's View",
            super: new SuperTag().deserialize(JSON.parse(`{
                "type": "board",
                "queries": {
                    "monday": {
                        "date_range": {
                            "gte": ["startOf", "day"],
                            "lte": ["endOf", "day"]
                        }
                    },
                    "tuesday": {
                        "date_range": {
                            "gte": [
                                ["add", "1", "day"],
                                ["startOf", "day"]
                            ],
                            "lte": [
                                ["add", "1", "day"],
                                ["endOf", "day"]
                            ]
                        }
                    }
                }
            }`))
        };
    }

    dailyAgendaTag(): Tag {
        return {
            id: '1000',
            color: '#AFCCAF',
            favorite: true,
            description: 'Daily Agenda',
            super: new SuperTag().deserialize(JSON.parse(`{
                "type": "board",
                "queries": {
                    "today": {
                        "date_range": {
                            "gte": [
                                ["startOf", "day"],
                                ["subtract", "year", 10]
                            ],
                            "lte": ["endOf", "day"]
                        }
                    },
                    "tomorrow": {
                        "date_range": {
                            "gte": [
                                ["add", "1", "day"],
                                ["startOf", "day"]
                            ],
                            "lte": [
                                ["add", "1", "day"],
                                ["endOf", "day"]
                            ]
                        }
                    }
                }
            }`))
        };
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
        const payload = {};
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

    updateItemAddTag(item: Item, tag: Tag): Promise<Item> {
        return this.http.put(this.url + '/task/' + item.id + '/tag/' + tag.id, {}).toPromise()
            .then((result: ResultStub) => {
                return result.data as Item;
            });
    }

    updateItemRemoveTag(item: Item, tag: Tag): Promise<Item> {
        return this.http.delete(this.url + '/task/' + item.id + '/tag/' + tag.id).toPromise()
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
