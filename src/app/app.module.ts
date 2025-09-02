import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/estrutura/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ApresentacaoComponent } from './componentes/home/apresentacao/apresentacao.component';
import { SobreComponent } from './componentes/home/sobre/sobre.component';
import { SkillsComponent } from './componentes/home/skills/skills.component';
import { ProjetosComponent } from './componentes/home/projetos/projetos.component';
import { FormacaoComponent } from './componentes/home/formacao/formacao.component';
import { ContatoComponent } from './componentes/home/contato/contato.component';
import { FooterComponent } from './componentes/estrutura/footer/footer.component';
import { ObrigadoComponent } from './componentes/paginas/obrigado/obrigado.component';
import { NaoEncontradoComponent } from './componentes/paginas/nao-encontrado/nao-encontrado.component';
import { CursorGlassComponent } from './componentes/home/cursor-glass/cursor-glass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ApresentacaoComponent,
    SobreComponent,
    SkillsComponent,
    ProjetosComponent,
    FormacaoComponent,
    ContatoComponent,
    FooterComponent,
    ObrigadoComponent,
    NaoEncontradoComponent,
    CursorGlassComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
