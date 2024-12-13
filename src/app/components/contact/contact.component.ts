import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CredentialsService } from 'src/app/credentials.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
contactform:any;

  constructor(private form:FormBuilder, private service : CredentialsService){
    this.contactform=form.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      phonenum:['',[Validators.required]],
      email:['',[Validators.required]],
      subject:['',[Validators.required]],
      message:['',[Validators.required]]
    })
  }

  contactsubmit()
  {
    this.service.contactUs(this.contactform.value).subscribe(res=>{
      console.log(res);
      alert("Message Sent Successfully");
      window.location.reload();
    },err=>{
      console.log(err);
    })

    
  }

}
