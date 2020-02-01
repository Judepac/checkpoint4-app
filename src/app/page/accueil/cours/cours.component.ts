import { Discipline } from './../../../models/discipline';
import { CoursService } from './../../../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from '../../../models/genre';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  genre: Genre [];
  cours: Discipline[] = [];
  // user: User;

  constructor(private coursService: CoursService, private userService: UserService) { }

  ngOnInit() {
    this.coursService.getGenre().subscribe( data => {
      this.genre = data;
    });

    // this.user = this.userService.user;
  }
  openCours(cours: Discipline[]) {
    this.coursService.getGenre().subscribe( data => {
      this.genre = data;
    });
    this.cours = cours;
  }
}
