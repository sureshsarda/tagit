import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';
    loading = false;
    showError = false;


    constructor(private authService: AuthenticationService) { }

    ngOnInit() {
    }

    async onLoginClick() {
        this.loading = true;
        console.log(`Attempting to login: ${this.username} using ${this.password}`);
        const status = await this.authService.login(this.username, this.password);
        if (status) {
            this.showError = false;
        } else {
            this.showError = true;
        }
        this.loading = false;
    }

}
