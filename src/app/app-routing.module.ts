import { AccueilComponent } from './page/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './page/accueil/profil/profil.component';
import { SignupComponent } from './page/signup/signup.component';


const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component : AccueilComponent},
  {path: 'profil', component: ProfilComponent },
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling : 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
