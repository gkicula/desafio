import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitacaoComponent } from './solicitacao.component';
import { SolicitacaoListarComponent } from './solicitacao-listar/solicitacao-listar.component';


const routes: Routes = [
    { path: '', component: SolicitacaoComponent },
    { path: 'listar', component: SolicitacaoListarComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SolicitacaoRoutingModule { }