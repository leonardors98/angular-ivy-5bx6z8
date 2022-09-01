import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { createPrinter } from 'typescript/lib/tsserverlibrary';
// import { CepService } from '../../../cep.service';
// import { PessoaService } from '../../../pessoa.service';
// import { MyValidators } from '../../../utils/myvalidators';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css'],
})
export class CadastroPessoaComponent implements OnInit {
  buttonLoading: boolean;

  questaoGroup = this.fb.group({
    opcoes: [[]],
  });

  opcaoGroup = this.fb.group({
    valor: ['', [Validators.required]],
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit() {}

  addOpcao() {
    console.log(this.questaoGroup.get('opcoes').value);
    this.questaoGroup.get('opcoes').value.push(this.opcaoGroup.value);
    this.opcaoGroup.reset();
  }
  addQuestao() {}
  adicionar() {}
  atualizar() {}
}
