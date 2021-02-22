import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NaoEstaLogadoGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {

   const isLoad = this.authService.isLoad();
 
    if (!isLoad) {
     return true;
    }
 
     this.router.navigate(['home']);
     return false;
  }

}
