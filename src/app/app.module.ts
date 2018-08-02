import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FrameworkPollComponent } from './framework-poll/framework-poll.component';

const config = {
  apiKey: 'ADD FIRESTORE DETAILS',
  authDomain: 'ADD FIRESTORE DETAILS',
  databaseURL: 'ADD FIRESTORE DETAILS',
  projectId: 'ADD FIRESTORE DETAILS',
  storageBucket: 'ADD FIRESTORE DETAILS',
  messagingSenderId: 'ADD FIRESTORE DETAILS'
};

@NgModule({
  declarations: [AppComponent, FrameworkPollComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  entryComponents: [FrameworkPollComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FrameworkPollComponent, {
      injector: this.injector
    });
    customElements.define('framework-poll', el);
  }
}
