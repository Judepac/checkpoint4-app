import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';
import { map } from 'rxjs/operators';

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
  getCoursWilder(age: number): Observable<Cours[]> {
    return this.http.get<Cours[]>(CoursService.URL + 'cours/' + age);
  }

  makeReservation(reservation: User, coursId: number): Observable<Cours> {
    return this.http.post<Cours>(CoursService.URL + 'cours/initiation', {reservation, coursId});
  }

  update(cours: Cours): Observable<Cours[]> {
    return this.http.put<Cours[]>(CoursService.URL + 'cours', cours);
  }

  getMyCours(userId: number): Observable<Cours[]> {
    return this.http.get<Cours[]>(CoursService.URL + 'cours').pipe(map( (coursList) => {

      console.log(coursList);
      console.log(userId);

      const coursUser: Cours[] = [];
      coursList.forEach(cours => {
        console.log(cours);

        cours.users.forEach(user => {
          console.log(user);

          if ( userId === user.id) {
           return coursUser.push(cours);
         }
       });
     });
      console.log(coursUser);

      return coursUser;
    }));
  }
}
