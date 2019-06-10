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
import { OrgComponent } from './containers/org/org.component';


import { MatTableModule } from '@angular/material/table';


@NgModule({
    declarations: [
        ItemContainerComponent,
        TagManagerComponent,
        HeaderComponent,
        SuperTagComponent,
        FocusComponent,
        OrgComponent
    ],
    imports: [
        AyeComponentsModule,
        CommonModule,
        MatIconModule,
        MatTableModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        ItemContainerComponent,
        OrgComponent
    ]
})
export class TodoModule { }
