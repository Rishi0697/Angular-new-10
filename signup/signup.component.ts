import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';

// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private fb: FormBuilder) { 
    this.signupForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      user : new FormControl(),
      password : new FormControl()
    })
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      user : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }


  //  signup:(e:any) {
  //   e.preventDefault();
  
  // }
  signup(){
    console.log(this.signupForm.value);
    // console.log("rishikesh");
    window.localStorage.setItem("token", JSON.stringify(this.signupForm.value));

      // ... your existing code
      // this.signupForm.close(); // close the modal when everything else is done
      // this.router.navigateByUrl("../login");
    
    // console.log(data.fname);
  }
  get fname(){
    return this.signupForm.get('fname');
  }
  get lname(){
    return this.signupForm.get('lname');
  }
  get user(){
    return this.signupForm.get('user');
  }
  get password(){
    return this.signupForm.get('password');
  }

  // const validation: {user:}
  // userName:String = "";
  // validation(){
  //   localStorage.setItem('key', JSON.stringify(this.userName));
  //   alert("registerd SuccessFully");
  // }
// let userName:object={
//   username ,
//   password: any
// }


}
