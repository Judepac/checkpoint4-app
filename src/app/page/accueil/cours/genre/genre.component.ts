import { Discipline } from './../../../../models/discipline';
import { CoursService } from './../../../../services/cours.service';
import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../../../../models/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  @Input() genre: Genre[];

  constructor() { }

  ngOnInit() {
  }

  openCours(cours: Discipline) {

  }
}
