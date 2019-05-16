import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    backendURL = environment.backendURL;

    constructor(private http: HttpClient) { }

    async login(username: string, password: string): Promise<boolean> {
        const body = { username, password };
        return this.http.post(this.backendURL + '/login', body).toPromise().then(
            (result: any) => {
                const data = result.data;
                const status = result.status;
                console.log(result);
                if (status === 'ok') {
                    if (data !== 'Invalid Credentials') {
                        localStorage.setItem('token', data);
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        )
    }

}
