import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { DetalheContatoComponent } from './detalhe-contato/detalhe-contato.component';


@NgModule({
  declarations: [
    ContatosComponent,
    DetalheContatoComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
