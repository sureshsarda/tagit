import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent as MainLandingComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input'
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MainLandingComponent,
        LoginComponent
    ],
    exports: [
        MainLandingComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule
    ]
})
export class LandingModule { }
