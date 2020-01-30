import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  static URL = 'http://localhost:3000/user';
  user: User;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(UserService.URL).pipe(tap( (data: User) => {
      this.user = data;
    }));
  }
}
