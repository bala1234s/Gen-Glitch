import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  storeuser:any;
  user:any;
  parsedDetails:any;

  constructor(private http: HttpClient, private route: Router) { }
  private apiUrl = "http://localhost:3001";

  getUserDetails(uservalue: any) {
    
    this.http.post<any>(`${this.apiUrl}/register`,uservalue).subscribe((userdetails)=>{
      const userval=userdetails.find((user:any)=>{
          return user.email==uservalue.email;
      })

      if(userval){
        alert("Already an User");
      }
      else{
        alert("Welcome to Gen Glitch, Thanks for registering");
        this.http.post<any>(`${this.apiUrl}/newuser`,uservalue).subscribe((message)=>{
          this.route.navigateByUrl('login').then(()=>{
            window.location.reload();
          })
        })
      }

    })
  }

  categories(){
   return this.http.get<any>(`${this.apiUrl}/categories`);
  }

  checkUser(user:any){
    this.http.post<any>(`${this.apiUrl}/register`,user).subscribe((userdetails)=>{
      const userval=userdetails.find((userval:any)=>{
        this.storeuser=userval;
        return userval.email==user.email && userval.password==user.password;
    })

    if(userval){
      alert("Login Successful");
      sessionStorage.setItem('login','true');
      const parseDetails=JSON.stringify(this.storeuser);
      sessionStorage.setItem('userDetails',parseDetails);
      this.route.navigateByUrl('categories').then(()=>{
        window.location.reload();
      });

    }
    else{
      alert("Invalid Credentials");
    }
    })
  }

  changePassword(userdetails:any){
    this.http.post<any>(`${this.apiUrl}/register`,userdetails).subscribe((uservalue)=>{
    const user=uservalue.find((found:any)=>{
      return found.email==userdetails.email;
    });

    if(user){
      this.http.post<any>(`${this.apiUrl}/forgotpassword`,userdetails).subscribe(()=>{
      console.log("updated");
      alert("Password Updated");
      this.route.navigateByUrl('login').then(()=>{
        window.location.reload();
      })
      })
    }
    else{
      alert("Invalid Details, Register first");
    }
    })
  }

  getproducts(){
    return this.http.get<any>(`${this.apiUrl}/products`)
  }

  productBook(product:any){
    console.log(product);
    return this.http.post<any>(`${this.apiUrl}/bookproduct`, product);
  }
  contactUs(contact: any) { 
    return this.http.post<any>(`${this.apiUrl}/contact`, contact);
  }
}
