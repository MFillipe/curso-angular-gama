import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contacts } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhe-contato',
  templateUrl: './detalhar-contato.component.html',
  styleUrls: ['./detalhar-contato.component.scss']
})
export class DetalheContatoComponent implements OnInit {

  contact: Contacts;

  isLoading: boolean = false;

  errorLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router
  ) { }
    

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact() {
    this.isLoading = true;
    this.errorLoading = false;

    const idContact = this.route.snapshot.paramMap.get('id');

    this.contatosService.getContact(idContact)
    .pipe(
      take(1),
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error),
    )
  }

  onSuccess(response: Contacts) {
    this.contact = response;
    console.log(this.contact);
  }

  onError(error: any) {
    this.isLoading = true;
    console.log(error);
  }

  back(){
    this.router.navigate([`contatos`]);
  }

}
