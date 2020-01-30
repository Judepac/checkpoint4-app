import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }
  static URL = 'http://localhost:3000/genre';

  getGenre(): Observable<Genre[]> {
    return this.http.get<Genre[]>(CoursService.URL);
  }
}
