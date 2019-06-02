import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    // TODO Refactor, this should be part of a Session class
    readonly SESSION_MAPPING = {
        token: 'token',
        name: 'name',
        email: 'email',
        id: 'user_id'
    };

    readonly backendURL = environment.backendURL;

    constructor(private http: HttpClient) { }

    async signup(name: string, email: string, password: string): Promise<boolean> {
        const body = { name, password, email };

        return this.http.post(this.backendURL + '/signup', body).toPromise().then(
            (result: any) => {
                const { data, status } = result;
                if (status === 'ok') {
                    if (!data.error) {
                        this.createSessionInLocalStorage(data);
                        return true;
                    } else {
                        throw Error(data.error);
                    }
                }
            }
        );
    }

    async login(username: string, password: string): Promise<boolean> {
        const body = { username, password };
        return this.http.post(this.backendURL + '/login', body).toPromise().then(
            (result: any) => {
                const data = result.data;
                const status = result.status;
                console.log(result);
                if (status === 'ok') {
                    if (data !== 'Invalid Credentials') {
                        this.createSessionInLocalStorage(data);
                        return true;
                    } else {
                        throw Error('Invalid Credentials');
                    }
                }
            }
        );
    }

    createSessionInLocalStorage(data: any) {
        Object.entries(this.SESSION_MAPPING).forEach(([key, value]) => localStorage.setItem(value, data[key]));
    }

    isLoggedIn(): boolean {
        return Object.values(this.SESSION_MAPPING).map(it => Boolean(localStorage.getItem(it))).every(it => it);
    }

}
