import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAXmmANvTBpPetwIC6KXu1nxTfKySQEZD4",
      authDomain: "angular-authentication-9b322.firebaseapp.com",
      databaseURL: "https://angular-authentication-9b322.firebaseio.com",
      projectId: "angular-authentication-9b322",
      storageBucket: "angular-authentication-9b322.appspot.com",
      messagingSenderId: "393043922685"
    });
  }
}
