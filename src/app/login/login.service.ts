import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: string, password: string) {
  
    if(email === 'mathewsfsilva@gmail.com' && password === '123') {
      return of({
        user: {
          name: 'Matheus',
          lasName: 'Silva',
          email: 'mathewsfsilva@gmail.com',
        },
        token: 'SJ123324234IUNKF0F2123IONFIERNI'
      }).pipe(
        delay(2000),
        tap(response => {
          this.authService.setUser(response.user);
          console.log(response);
        })
      );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('User or password invalid'))
    );

  }
}
