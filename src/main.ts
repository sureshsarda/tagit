import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as firestore from 'firebase/app';

const config = {
    apiKey: 'AIzaSyCLpN9vVfsVg4Jges8mLpm42tt4iNl3fq8',
    authDomain: 'todo-app-79d2f.firebaseapp.com',
    databaseURL: 'https://todo-app-79d2f.firebaseio.com',
    projectId: 'todo-app-79d2f',
    storageBucket: 'todo-app-79d2f.appspot.com',
    messagingSenderId: '975188620551'
};
// firestore.settings(config);
firestore.initializeApp(config);
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
