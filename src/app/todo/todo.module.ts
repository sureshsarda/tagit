import { ItemContainerComponent } from './components/item-container/item-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    ItemContainerComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
      ItemContainerComponent
  ]
})
export class TodoModule { }
