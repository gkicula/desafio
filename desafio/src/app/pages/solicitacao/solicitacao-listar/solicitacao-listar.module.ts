import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule, NzGridModule, NzButtonModule, NzTableModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { SolicitacaoComponent } from '../solicitacao.component';


@NgModule({
  declarations: [SolicitacaoComponent],
  imports: [
    CommonModule,
    
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzGridModule,
    NzButtonModule,
    NzInputNumberModule,
    NzTableModule
  ]
})
export class ProdutoModule { }
