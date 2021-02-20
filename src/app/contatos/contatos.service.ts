import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contacts } from './contatos.interface';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { 
  }

  getContacts() {
    return this.http.get<Contacts[]>(`${this.API_URL}/contatos`);
  }

  getContact(id: string) {
    return this.http.get<Contacts>(`${this.API_URL}/contatos/${id}`); 
  }
}
