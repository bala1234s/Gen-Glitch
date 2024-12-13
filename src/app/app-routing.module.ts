import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { BookpageComponent } from './components/bookpage/bookpage.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path: 'about',
    component:AboutusComponent
  },
  {
    path: 'register',
    component:SignupComponent
  },
  {
    path: 'login',
    component:LoginpageComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'products',
    component:ProductsComponent
  },
  {
    path: 'addtocart',
    component:AddtocartComponent
  },
  {
    path:"forgotpassword",
    component: ForgetpasswordComponent
    
  },
  {
    path:"orderconfirm",
    component:BookpageComponent
  },
  {
    path:"categories",
    component:CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
