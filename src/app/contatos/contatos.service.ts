import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contacts } from './contatos.interface';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      Authorizathion: '... Token ...'
    })
  };

  constructor(
    private http: HttpClient,
  ) { 
  }

  getContacts() {
    return this.http.get<Contacts[]>(`${this.API_URL}/contatos`);
  }

  getContact(id: string) {
    return this.http.get<Contacts>(`${this.API_URL}/contatos/${id}`, this.httpOptions); 
  }

  createContact(contact: Contacts) {

    return this.http.post<Contacts[]>(`${this.API_URL}/contatos`, contact, this.httpOptions);
  }

  updateContact(id: string, contact: Contacts) {
    return this.http.put<Contacts[]>(`${this.API_URL}/contatos ${id}`, contact);
  }

  deleteContact(id: string) {
    return this.http.delete<Contacts>(`${this.API_URL}/contatos/${id}`); 
  }
}
