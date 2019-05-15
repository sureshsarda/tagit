import { ChippedTagComponent } from './tags/chipped-tag-lister/chipped-tag/chipped-tag.component';
import { ChippedTagListerComponent } from './tags/chipped-tag-lister/chipped-tag-lister.component';
import { TagDropAreaDirective } from './tags/tag-drop-area.directive';
import { HorizontalComponent } from './lister/horizontal/horizontal.component';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tags/tag/tag.component';
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
import { ItemCardComponent } from './item-card/item-card.component';
import { TagListerComponent } from './lister/tag-lister/tag-lister.component';
import { TagEditorComponent } from './tags/tag-editor/tag-editor.component';
import { DraggableTagDirective } from './tags/draggable-tag.directive';
import { NavigatorComponent } from './navigator/navigator.component';
import { VerticalTagListerComponent } from './tags/lister/vertical-tag-lister/vertical-tag-lister.component';
import { TagChipComponent } from './tags/single/tag-chip/tag-chip.component';
import { SimpleTagComponent } from './tags/single/simple-tag/simple-tag.component';

@NgModule({
    declarations: [
        TagComponent,
        ItemComponent,
        HorizontalComponent,
        ItemCardComponent,
        TagListerComponent,
        TagEditorComponent,
        TagDropAreaDirective,
        DraggableTagDirective,
        ChippedTagListerComponent,
        ChippedTagComponent,
        NavigatorComponent,
        VerticalTagListerComponent,
        TagChipComponent,
        SimpleTagComponent,
        // DraggableItemDirective,
    ],
    exports: [
        TagComponent,
        ItemComponent,
        HorizontalComponent,
        TagListerComponent,
        TagEditorComponent,
        NavigatorComponent,
        VerticalTagListerComponent,
        SimpleTagComponent,
        // DraggableItemDirective
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
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ]
})
export class AyeComponentsModule { }
