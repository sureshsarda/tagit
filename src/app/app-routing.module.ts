import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemContainerComponent } from './todo/components/item-container/item-container.component';
import { TagManagerComponent } from './todo/tag-manager/tag-manager.component';

const routes: Routes = [
    { path: '', component: ItemContainerComponent },
    { path: 'tags/:id/view', component: ItemContainerComponent },
    { path: 'tags/manage', component: TagManagerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
