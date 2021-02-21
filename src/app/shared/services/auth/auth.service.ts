import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    const userValid = localStorage.getItem('user');

    if(userValid) {
      return JSON.parse(userValid);
    }

    return null;

  }
}
