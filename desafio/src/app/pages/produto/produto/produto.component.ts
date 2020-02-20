import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  form: FormGroup;
  preco: number;


  constructor(private fb: FormBuilder) {this.preco = 0 }

  ngOnInit(): void {
    this.form = this.fb.group({
        nome: [, Validators.required],
        preco: [, Validators.required]
    });
  }



  formatterReal = (value: number) => `$ ${value}`;
  parserReal = (value: string) => value.replace('$ ', '');

  save(model){
    console.log(model);
  }

}
