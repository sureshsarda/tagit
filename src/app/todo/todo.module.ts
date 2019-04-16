import { TagComponent } from './components/item/tag/tag.component';
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { MatIconModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ItemContainerComponent,
        ItemComponent,
        TagComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        ItemContainerComponent
    ]
})
export class TodoModule { }
