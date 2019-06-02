import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LandingModule } from './landing/landing.module';
import { applicationReducer, CustomSerializer } from './store';
import { ItemEffects } from './store/effects/item.effect';
import { TagEffects } from './store/effects/tag.effect';
import { TodoModule } from './todo/todo.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        LandingModule,
        BrowserModule,
        AppRoutingModule,
        LandingModule,
        TodoModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreRouterConnectingModule,
        StoreModule.forRoot(applicationReducer),
        EffectsModule.forRoot([ItemEffects, TagEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 5
        })
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer },
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
