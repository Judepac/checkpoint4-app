import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuiComponent } from './components/qui/qui.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { CoursComponent } from './page/accueil/cours/cours.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ContactComponent } from './components/contact/contact.component';
import { BienvenuComponent } from './components/bienvenu/bienvenu.component';
import { HttpClientModule } from '@angular/common/http';
import { DisciplineComponent } from './page/accueil/cours/discipline/discipline.component';
import { GenreComponent } from './page/accueil/cours/genre/genre.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { FormsModule } from '@angular/forms';
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
    BienvenuComponent,
    GenreComponent,
    DisciplineComponent,
    ReservationFormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    ReservationFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
