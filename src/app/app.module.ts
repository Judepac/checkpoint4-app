import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuiComponent } from './components/qui/qui.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { CoursComponent } from './components/cours/cours.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ContactComponent } from './components/contact/contact.component';
import { BienvenuComponent } from './components/bienvenu/bienvenu.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    QuiComponent,
    EquipeComponent,
    CoursComponent,
    ProfilComponent,
    ContactComponent,
    BienvenuComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
