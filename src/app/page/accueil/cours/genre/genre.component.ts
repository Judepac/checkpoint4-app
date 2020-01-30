import { Discipline } from './../../../../models/discipline';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Genre } from '../../../../models/genre';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  @Input() genre: Genre[];
  @Input() user: User;
  @Output() cours = new EventEmitter<Discipline>();

  constructor() { }

  ngOnInit() {
  }

  openCours(cours: Discipline) {
    this.cours.emit(cours);
  }
}
