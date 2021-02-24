import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheContatoComponent } from './detalhar-contato/detalhar-contato.component';
import { ListarContatosComponent } from './listar-contato/listar-contatos.component';

const routes: Routes = [{
  path: '',
  component: ListarContatosComponent,
}, {
  path: 'id',
  component: DetalheContatoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
