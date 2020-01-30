import { Discipline } from './../../../../models/discipline';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent implements OnInit {
  @Input() cours: Discipline[];

  constructor() { }

  ngOnInit() {
  }
  resetCours() {
    this.cours.length = 0;


  }

}
