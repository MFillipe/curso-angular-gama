import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contacts } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contacts: Contacts[];

  isLoading: boolean;

  errorLoading: boolean;

  constructor(
    private contatosService: ContatosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.isLoading = true;
    this.errorLoading = false;
    this.contatosService.getContacts()
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

  goToDetails(idContact: string) {
    this.router.navigate([`contatos/${idContact}`]);
  }

}
