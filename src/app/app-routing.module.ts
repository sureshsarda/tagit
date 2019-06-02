import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './landing/login/login.component';
import { MainComponent } from './landing/main/main.component';
import { ItemContainerComponent } from './todo/components/item-container/item-container.component';
import { TagManagerComponent } from './todo/tag-manager/tag-manager.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: LoginComponent },
    { path: 'app', component: ItemContainerComponent, canLoad: [AuthGuard], pathMatch: 'full' },
    { path: 'app/tags/:id/view', component: ItemContainerComponent, canLoad: [AuthGuard] },
    { path: 'app/tags/manage', component: TagManagerComponent, canLoad: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
