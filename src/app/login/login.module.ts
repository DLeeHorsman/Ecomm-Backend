import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgForm} from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
//import { RouterModule } from '@angular/router';
//import { PublicComponent } from '../public/public.component';
//import { LandingComponent } from '../public/landing/landing.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule,ReactiveFormsModule
   
  ], providers: [AuthService]
})
export class LoginModule { }