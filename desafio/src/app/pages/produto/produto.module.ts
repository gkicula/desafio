import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoRoutingModule } from './produto-routing';
import { NzFormModule, NzGridModule, NzButtonModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';


@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzGridModule,
    NzButtonModule,
    NzInputNumberModule,
  ]
})
export class ProdutoModule { }
