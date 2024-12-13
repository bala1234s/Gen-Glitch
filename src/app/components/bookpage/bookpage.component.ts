import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent {
constructor(private route:Router){
      setTimeout(()=>{
        sessionStorage.removeItem('product');
        route.navigateByUrl('products');
        },2000)
    }
}
