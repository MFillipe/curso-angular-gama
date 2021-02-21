import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

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
        delay(2000)
      );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('User or password invalid'))
    );

  }
}
