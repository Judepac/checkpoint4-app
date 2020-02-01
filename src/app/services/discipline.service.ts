import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Discipline } from '../models/discipline';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  static URL = 'http://localhost:3000/discipline';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Discipline[]> {
    return this.http.get<Discipline[]>(DisciplineService.URL);
  }
}
