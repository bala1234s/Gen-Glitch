import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  routeshow: any = '/login';

  constructor(private route: Router) {
    if (sessionStorage.getItem('login')) {
      if (sessionStorage.getItem('login') == "true") {
        this.routeshow = '/categories';
       
      }
    }
    else {
     
      this.routeshow = '/login';
    }
  }
}
