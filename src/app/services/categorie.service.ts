import { Categorie } from './../models/categorie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  static URL: 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(CategorieService.URL);
  }
}
