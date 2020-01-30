import { CoursService } from './../../../../services/cours.service';
import { Discipline } from './../../../../models/discipline';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservationFormComponent } from '../../../../components/reservation-form/reservation-form.component';
import { Cours } from '../../../../models/cours';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss']
})
export class DisciplineComponent implements OnInit {
  @Input() cours: Discipline[];
  @Input() user: User;

  arrayCours: Cours[];

  constructor(private modalService: NgbModal, private coursService: CoursService) { }

  ngOnInit() {
    this.coursService.getCours().subscribe( (data: Cours[]) => {
      this.arrayCours = data;
    }) ;

  }

  resetCours() {
    this.cours.length = 0;
  }
  open(disciplineId: number) {
    let nextCours: Cours;
    this.arrayCours.forEach(element => {
      if (element.disciplines.id === disciplineId) {
        nextCours = element;
      }
    });
    const modalRef = this.modalService.open(ReservationFormComponent, { centered: true });
    modalRef.componentInstance.cours = nextCours;
  }

}
