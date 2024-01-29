import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup=new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  login() {
    if (this.form.valid) {
      const username = this.form.value.username;
      const password = this.form.value.password;
      console.log('Username:', username);
      console.log('Password:', password);
    }
  }
}