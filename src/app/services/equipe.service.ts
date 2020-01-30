import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  static URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getTeam(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(EquipeService.URL + '/formateur');
  }
}
