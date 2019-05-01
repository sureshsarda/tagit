import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { TagComponent } from './components/item/tag/tag.component';
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import {
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ItemContainerComponent,
        ItemComponent,
        TagComponent,
        PomodoroComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        ItemContainerComponent
    ]
})
export class TodoModule { }
