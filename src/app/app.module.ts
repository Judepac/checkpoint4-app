import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

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
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule

  ],
  providers: [ { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }, {
      provide: LOCALE_ID,
      useValue: 'fr'
      }],
  entryComponents: [
    ReservationFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
