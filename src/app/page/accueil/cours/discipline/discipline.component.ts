import { Categorie } from './../../../../models/categorie';
import { CoursService } from './../../../../services/cours.service';
import { Discipline } from './../../../../models/discipline';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user';
import { ReservationFormComponent } from '../../../../components/reservation-form/reservation-form.component';
import { Cours } from '../../../../models/cours';
import { MatDialog } from '@angular/material/dialog';
import { CategorieService } from '../../../../services/categorie.service';
import { DisciplineService } from '../../../../services/discipline.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent implements OnInit {
  @Input() cours: Discipline[];
  @Input() user: User;

  arrayCours: Cours[];
  disciplines: Discipline[];

  constructor(public dialog: MatDialog, private coursService: CoursService, private disciplineService: DisciplineService) { }

  ngOnInit() {
    this.coursService.getCours().subscribe( (data: Cours[]) => {
      this.arrayCours = data;
    });
    this.disciplineService.getAll().subscribe( (data: Discipline[]) => {
      this.disciplines = data;
    } );
  }

  resetCours() {
    this.cours.length = 0;
  }
  openDialog(discipline: Discipline) {
    let nextCours: Cours;
    this.arrayCours.forEach(element => {
      if (element.disciplines.id === discipline.id) {
        nextCours = element;
      }
    });

    const dialogRef = this.dialog.open(ReservationFormComponent, {
      width: '45vw',
      disableClose: true,
      data: nextCours
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
