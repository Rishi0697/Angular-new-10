import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :  FormGroup;

  constructor(private fb:FormBuilder ) {
    this.loginForm = new FormGroup({
      // fname: new FormControl(),
      // lname: new FormControl(),
      user : new FormControl(),
      password : new FormControl()
    })
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      user : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(5)])
    })
    }

  
  login(){
    // let name=JSON.parse(localStorage.getItem(this.loginForm.value));
    // console.log(name);
    let name = this.loginForm.value;
    console.log(name);
            // console.log(localStorage.getItem("token"));
    // console.log(username);
  }
  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
