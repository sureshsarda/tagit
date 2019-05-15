import { FocusComponent } from './containers/focus/focus.component';
import { HeaderComponent } from './header/header.component';
import { TagManagerComponent } from './tag-manager/tag-manager.component';
import { AyeComponentsModule } from './../component/aye.module';
import { ItemContainerComponent } from './components/item-container/item-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuperTagComponent } from './super-tag/super-tag.component';


@NgModule({
    declarations: [
        ItemContainerComponent,
        TagManagerComponent,
        HeaderComponent,
        SuperTagComponent,
        FocusComponent
    ],
    imports: [
        AyeComponentsModule,
        CommonModule,
        MatIconModule,

        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        ItemContainerComponent,
    ]
})
export class TodoModule { }
