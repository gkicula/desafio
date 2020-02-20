import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoComponent } from './solicitacao.component';
import { SolicitacaoRoutingModule } from './solicitacao-routing';
import { SolicitacaoListarComponent } from './solicitacao-listar/solicitacao-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule, NzGridModule, NzButtonModule, NzInputNumberModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [SolicitacaoComponent, SolicitacaoListarComponent],
  imports: [
    CommonModule,
    SolicitacaoRoutingModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzGridModule,
    NzButtonModule,
    NzInputNumberModule,
  ]
})
export class SolicitacaoModule { }
