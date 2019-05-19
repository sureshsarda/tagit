import { AuthenticationService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';
    name = '';
    section = 'login';
    loading = false;
    showError = false;
    errorMessage = 'Unknown error has occurred';


    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthenticationService) { }

    ngOnInit() {
        this.activatedRoute.url.subscribe(
            (segments: UrlSegment[]) => {
                if (segments && segments.length > 0) {
                    const segment = segments[0];
                    this.section = segment.path;
                }
            });
    }

    async onLoginClick() {
        this.loading = true;

        try {
            await this[this.section]();
            this.showError = false;
            this.router.navigate(['/app']);
        } catch (error) {
            this.showError = true;
            this.errorMessage = error;
        } finally {
            this.loading = false;
        }
    }

    // do not rename, should be same as url path
    async login() {
        return this.authService.login(this.username, this.password);
    }

    // do not rename, should be same as url path
    async signup() {
        return this.authService.signup(this.name, this.username, this.password);
    }

}
