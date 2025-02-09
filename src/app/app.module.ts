import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/estrutura/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ApresentacaoComponent } from './componentes/home/apresentacao/apresentacao.component';
import { SobreComponent } from './componentes/home/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ApresentacaoComponent,
    SobreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
