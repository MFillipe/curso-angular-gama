import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos.component';
import { DetalheContatoComponent } from './detalhe-contato/detalhe-contato.component';

const routes: Routes = [{
  path: '',
  component: ContatosComponent,
}, {
  path: 'id',
  component: DetalheContatoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
