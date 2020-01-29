import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuiComponent } from './page/qui/qui.component';
import { EquipeComponent } from './page/equipe/equipe.component';
import { CoursComponent } from './page/cours/cours.component';
import { ProfilComponent } from './page/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    QuiComponent,
    EquipeComponent,
    CoursComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
