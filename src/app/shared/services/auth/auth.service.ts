import { Injectable } from '@angular/core';

import { User } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  token: string;

  constructor() { }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {

    if(this.user) {
      return this.user;
    }

    const userValid = localStorage.getItem('user');

    if(userValid) {
      this.user = JSON.parse(userValid);
      return this.user;
    }

    return null;

  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {

    if(this.token) {
      return this.token;
    }

    const tokenValid = localStorage.getItem('token');

    if(tokenValid) {
      this.token = tokenValid;
      return this.token;
    }

    return null;
  }

  isLoad(): boolean {
    //return this.getUser() && this.getToken() ? true : false;

    if (this.getUser() && this.getToken()) {
      return true;
    }

    return false;
  }
}
