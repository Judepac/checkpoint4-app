import { Discipline } from './../../../models/discipline';
import { CoursService } from './../../../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from '../../../models/genre';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  genre: Genre [];
  cours: Discipline[] = [];

  constructor(private coursService: CoursService) { }

  ngOnInit() {
    this.coursService.getGenre().subscribe( data => {
      this.genre = data;
    });
  }
  openCours(cours: Discipline[]) {
    this.coursService.getGenre().subscribe( data => {
      this.genre = data;
    });
    this.cours = cours;
  }
}
