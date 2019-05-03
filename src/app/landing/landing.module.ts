import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        MainComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ]
})
export class LandingModule { }
