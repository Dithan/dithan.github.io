import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
