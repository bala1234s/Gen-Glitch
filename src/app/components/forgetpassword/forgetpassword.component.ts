import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/credentials.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
 forgotvalidate:any;
  changes:boolean=true;
  field:boolean=true;
  changes1:boolean=true;
  field1:boolean=true;

  constructor(private route:Router,private form:FormBuilder,private service:CredentialsService){
    this.forgotvalidate=form.group({
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      password:['',[Validators.required,Validators.pattern('^.{8,}$')]],
      confirmpassword:['',[Validators.required]]
    })
  }

  forgotPage(){

  }

  loginpage(){
    this.route.navigateByUrl("login")
  }

  changeIcon(){
    this.field=!this.field;
    this.changes=!this.changes;
  }
  changeIcon1(){
    this.field1=!this.field1;
    this.changes1=!this.changes1;
  }

  forgotSubmit(){
    if(this.forgotvalidate.controls['password'].value==this.forgotvalidate.controls['confirmpassword'].value){
      this.service.changePassword(this.forgotvalidate.value);
    }
    else{
      alert("Password does not match");
    }
  }
}
