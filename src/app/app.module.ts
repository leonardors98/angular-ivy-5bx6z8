import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './view/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { EsqueciSenhaComponent } from './view/esqueci-senha/esqueci-senha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AutoFocusModule } from 'primeng/autofocus';
import { CadastroPessoaComponent } from './view/cadastro-pessoa/cadastro-pessoa.component';
import { InputComponent } from './components/input/input.component';
import { PasswordModule } from 'primeng/password';
import { Divider, DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    AutoFocusModule,
    PasswordModule,
    DividerModule,
    InputMaskModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    CadastroPessoaComponent,
    InputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
