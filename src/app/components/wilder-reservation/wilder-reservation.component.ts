import { Component, OnInit, Input } from '@angular/core';
import { Cours } from '../../models/cours';
import { CoursService } from '../../services/cours.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-wilder-reservation',
  templateUrl: './wilder-reservation.component.html',
  styleUrls: ['./wilder-reservation.component.scss']
})
export class WilderReservationComponent implements OnInit {
  @Input() user: User;
  listCours: Cours[] = [];

  constructor(private coursService: CoursService) { }

  ngOnInit() {
    this.coursService.getMyCours(this.user.id).subscribe( data => {
      console.log(data);

      this.listCours = data;
    });
  }
  // openForm(cours: Cours, user: User) {
  //   return this.coursService.update(cours.id, user);
  //  }
}
