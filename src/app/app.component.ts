import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // selectedWindow = 'recipe';

  // onNavigate(selectedNavMenu: string) {
  //   this.selectedWindow = selectedNavMenu;
  // }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCD0ESJC4-6SVw5RQI1Oc1OAfxyWE4JQzY',
      authDomain: 'tryproject-a7c0e.firebaseapp.com'
    });
  }
}
