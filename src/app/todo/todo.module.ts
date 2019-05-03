import { AyeComponentsModule } from './../component/aye.module';
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ItemContainerComponent,
    ],
    imports: [
        AyeComponentsModule,
        CommonModule,
        MatIconModule,

        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        ItemContainerComponent
    ]
})
export class TodoModule { }
