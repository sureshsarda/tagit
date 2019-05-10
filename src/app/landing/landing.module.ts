import { MainComponent as MainLandingComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        MainLandingComponent
    ],
    exports: [
        MainLandingComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ]
})
export class LandingModule { }
