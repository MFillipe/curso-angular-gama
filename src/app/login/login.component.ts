import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;

  password: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubimit(form) {

    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();
      console.log(form);
      console.log('Invalid Form!!');
      return;
    }

    console.log('email: ', this.email);
    console.log('password: ', this.password);
  }

  showError(nameControl: string, form: FormGroup) {

    if(!form.controls[nameControl]) {
      return false;
    }

    return form.controls[nameControl].invalid && form.controls[nameControl].touched
  }
  
}
