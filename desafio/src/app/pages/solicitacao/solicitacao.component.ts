import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RequestService } from 'src/assets/services/http-service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {
  form: FormGroup;
  preco: number;
  lista: any;

  constructor(private fb: FormBuilder, private rservice: RequestService) { this.preco = 0 }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [, Validators.required],
      preco: [this.preco, Validators.required],
      produto: [, Validators.required]
    });

    this.rservice.get().subscribe((element: any) => {
      this.lista = element;
      console.log( this.lista);
    });
  }



  formatterReal = (value: number) => `R$ ${value}`;
  parserReal = (value: string) => value.replace('$ ', '');


  save(model) {

    this.rservice.inserir(model);
    console.log(model);
  }

}