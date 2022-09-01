import { Component, VERSION, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  constructor(private config: PrimeNGConfig) {}

  ngOnInit() {
    this.config.setTranslation({
      passwordPrompt: 'Insira sua senha!',
      reject: 'Cancelar',
      weak: 'fraco',
      medium: 'médio',
      strong: 'forte!',
      //translations
    });
  }
}
