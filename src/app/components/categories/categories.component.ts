import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/credentials.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
 products:any;
  routeshow:any;
  provideacess:boolean=true;
  getDetails:any;
  parsedDetails:any;
  particularproduct:any;
  constructor(private service:CredentialsService,private route:Router){
    if(sessionStorage.getItem('login')){
      if(sessionStorage.getItem('login')=="true"){
        this.routeshow='/products';
        this.provideacess=false;
        this.getDetails=sessionStorage.getItem('userDetails');
        this.parsedDetails=JSON.parse(this.getDetails);
        console.log(this.parsedDetails);
      }
    }
    else{
      this.provideacess=true;
      this.routeshow='/login';
    }

    service.categories().subscribe((categoriesres)=>{
      // console.log(categoriesres[0].catname);
      this.products=categoriesres;
      console.log(this.products[0]);
    });
  }

  productname(name:any){
      console.log(name);
     const result= this.products.find((value:any)=>{
      this.particularproduct=value;
        return value.catname==name;
      })
      if(result){
        sessionStorage.setItem('categoryname',JSON.stringify(this.particularproduct));
      }
      else{

      }
      this.route.navigateByUrl(this.routeshow).then(()=>{
        window.location.reload();
      })
  }
}
