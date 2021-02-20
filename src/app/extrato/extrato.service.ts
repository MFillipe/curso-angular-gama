import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Transaction } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(
    private http: HttpClient,
  ) { 
  }

  API_URL = environment.API_URL;

  getTransactions(page: number) {
    //return throwError(new Error('OPA'));
    return this.http.get<Transaction[]>(`${this.API_URL}/transacoes`, {
      params: {
        _page: String(page)
      }
    });
  }
}
