import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  static URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  getTeam(): Observable<User[]> {
    return this.http.get<User[]>(EquipeService.URL + '/formateur');
  }
}
