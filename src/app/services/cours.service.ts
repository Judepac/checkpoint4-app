import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }
  static URL = 'http://localhost:3000/';

  getGenre(): Observable<Genre[]> {
    return this.http.get<Genre[]>(CoursService.URL + 'genre');
  }

  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(CoursService.URL + 'cours');
  }
}
