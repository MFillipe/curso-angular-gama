import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  
  email: string;

  password: string;
  
  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  onSubimit(form) {
    console.log(this.emailInput);
    
    if (!form.valid) {
      
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if(form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }

      if(form.controls.password.invalid){
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }

   this.login();
  }

  login() {
    this.loginService.logar(this.email, this.password)
    .subscribe(
      response => {
        console.log('Sucess!');
      },
      error => {
        console.log('Invalid Access');
      }
    )
  }

  showError(nameControl: string, form: NgForm) {

    if(!form.controls[nameControl]) {
      return false;
    }

    return form.controls[nameControl].invalid && form.controls[nameControl].touched
  }
  
}
