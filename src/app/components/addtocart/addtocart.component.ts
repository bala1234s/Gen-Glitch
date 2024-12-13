import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/credentials.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent {
 prodval:any;
  parseval:any;
  products:any;
  deleteproduct:any;
  parsedelete:any;
  splicedata:any;
  stringsession:any;
  finalbook:any;
  parsefinal:any;
  productdeliver: any;
  addressForm: any;
  constructor(private service:CredentialsService,private route:Router, private fb: FormBuilder){
    if(sessionStorage.getItem('product')){
      this.prodval=sessionStorage.getItem('product');
      this.parseval=JSON.parse(this.prodval);
      this.products=this.parseval;
      console.log(this.products);
    }
      this.addressForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')]
      ],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{6}$')]
      ]
    });
  }

  get f() {
    return this.addressForm.controls;
  }
  
  bookNow() { 
  // Calculate total price
  const totalPrice = this.products.reduce((acc: any, product: { price: any; }) => acc + product.price, 0);

  // Prepare the final object to send to the API
  const final = {
    name: this.addressForm.value.name,
    email: this.addressForm.value.email,
    phone: this.addressForm.value.phone,
    address: this.addressForm.value.address,
    city: this.addressForm.value.city,
    state: this.addressForm.value.state,
    pincode: this.addressForm.value.pincode,
    products: this.products,
    totalPrice: totalPrice // Add the total price
  };

  console.log(final);

  // Call the service to send the data
  this.service.productBook(final).subscribe((res) => {
    console.log(res);
    sessionStorage.removeItem('product');
    this.route.navigateByUrl('orderconfirm');
  });
}

  deletebook(index:any,proname:any){
    this.deleteproduct=sessionStorage.getItem('product');
    this.parsedelete=JSON.parse(this.deleteproduct);
    if(this.parsedelete.length>1){
     this.splicedata= this.parsedelete.splice(index,1);
     console.log(this.splicedata);
      this.stringsession=JSON.stringify(this.parsedelete);
     sessionStorage.setItem('product',this.stringsession);
      this.route.navigateByUrl('addtocart').then(()=>{
        window.location.reload();
      })
    }
    else{
      sessionStorage.removeItem('product');
      this.route.navigateByUrl('').then(()=>{
        window.location.reload();
      })
    }
    // sessionStorage.setItem('product',proname);

  }
}
