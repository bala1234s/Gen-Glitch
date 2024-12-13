import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/credentials.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  loginvalidate: any;
  provideacess:boolean=true;
  field:boolean=true;
  changes:boolean=true;

  constructor(private form: FormBuilder,private route:Router,private service:CredentialsService) {
   this.loginvalidate=form.group({
     email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
     password:['',[Validators.required,Validators.pattern('^.{8,}$')]]
    })

  }

  registerPage() {
    this.route.navigateByUrl('register');
  }

  changeIcon(){
    this.field=!this.field;
    this.changes=!this.changes;
  }

  loginSubmit(){
    this.service.checkUser(this.loginvalidate.value);
  }


}
