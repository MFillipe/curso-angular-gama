import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Contacts } from './contatos.interface';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contacts: Contacts[];

  isLoading: boolean;

  errorLoading: boolean;

  constructor(
    private contatosService: ContatosService
  ) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.isLoading = true;
    this.errorLoading = false;
    this.contatosService.getTransactions()
    .pipe(
      take(1),
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      response =>  this.onSuccess(response),
      error => this.onError(error)
    )
  }

  onSuccess(response: Contacts[]) {
    this.contacts = response;
  }

  onError(error: any) {
    this.isLoading = false;
    console.log(error);
  }

}
