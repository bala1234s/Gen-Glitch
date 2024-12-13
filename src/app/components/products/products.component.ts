import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/credentials.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products:any;
  storeproduct:any;
  productsdetails:any;
  secondlogic:any;
  parseddetails:any;
  itemdetails:any;
  parseconstruct:any;
  loopbutton:any;
  parsedfinal:any;
  button:any;
  loopindex:any;
  insidebutton:any;
  user:any;
  parseuser:any;
  useremail:any
  catsession:any;
  parsedval:any;
// trackByIndex: TrackByFunction<any>;
// trackByRating: TrackByFunction<number>;
  constructor(private service:CredentialsService,private route:Router){
    // service.getproducts().subscribe((productdetails)=>{
    //   console.log(productdetails);
    //   this.products=productdetails;
    // })

    this.catsession=sessionStorage.getItem('categoryname');
    this.parsedval=JSON.parse(this.catsession);
    this.products=this.parsedval.products;



  }

  productName(index:any,item:any){
    console.log(index);

    if(sessionStorage.getItem('product')){
      this.button=document.getElementsByClassName('btn')[index];
      this.button.style.backgroundColor='red';
      this.button.style.cursor='none';
      this.button.disabled=true;
      this.button.innerText="Added";
      this.user=sessionStorage.getItem('userDetails');
      this.parseuser=JSON.parse(this.user);
      this.useremail=this.parseuser.email;
      this.secondlogic=sessionStorage.getItem('product');
      this.parseddetails=JSON.parse(this.secondlogic);
      console.log(this.parseddetails);
      if(this.parseddetails.length>0){
        let storeproduct={
          productname:item.cakename,
          productimg:item.img,
          price:item.price,
          productid:index,
          email:this.useremail
        }
        this.parseddetails.push(storeproduct);
        this.parsedfinal=JSON.stringify(this.parseddetails);
        sessionStorage.setItem('product',this.parsedfinal);
        this.route.navigateByUrl('products').then(()=>{
          window.location.reload();
        });
      }
    }
    else{
      this.button=document.getElementsByClassName('btn')[index];
      this.button.style.backgroundColor='red';
      this.button.style.cursor='none';
      this.button.disabled=true;
      this.button.innerText="Added";
      this.user=sessionStorage.getItem('userDetails');
      this.parseuser=JSON.parse(this.user);
      this.useremail=this.parseuser.email;
      let storeproduct=[{
        productname:item.cakename,
        productimg:item.img,
        price:item.price,
        productid:index,
        email:this.useremail
      }]
      this.storeproduct=JSON.stringify(storeproduct);
      sessionStorage.setItem('product',this.storeproduct);
      this.route.navigateByUrl('products').then(()=>{
        window.location.reload();
      });
    }
  }

  ngAfterViewInit(): void {

    if(sessionStorage.getItem('product')){
      this.productsdetails=sessionStorage.getItem('product');
      this.parseconstruct=JSON.parse(this.productsdetails);
      for(var i=0;i<this.parseconstruct.length;i++){
        console.log(this.parseconstruct[i].productid);
        this.loopindex=this.parseconstruct[i].productid;
        this.loopbutton=document.getElementsByClassName('btn') as HTMLCollectionOf<HTMLButtonElement>;
        console.log(this.loopbutton.length);
        if(this.loopindex >=0 && this.loopindex<this.loopbutton.length){
          console.log(this.loopindex);
          this.insidebutton = this.loopbutton[this.loopindex];
          this.insidebutton.style.backgroundColor = 'red';
          this.insidebutton.style.cursor = 'none';
          this.insidebutton.disabled = true;
          this.insidebutton.innerText = "Added";
        }

        // this.loopbutton=this.loopbutton[this.parseconstruct[i].productid];
        // this.loopbutton.style.backgroundColor='red';
        // this.loopbutton.style.cursor='none';
        // this.loopbutton.disabled=true;
        // this.loopbutton.innerText="Added";
        }
    }
  }

  ratingsshown(rating:number):number[]{
    return Array(rating).fill(0).map((x,i)=>i);
  }
}
