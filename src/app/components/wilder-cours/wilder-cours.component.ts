import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { Cours } from '../../models/cours';
import { CoursService } from '../../services/cours.service';

@Component({
  selector: 'app-wilder-cours',
  templateUrl: './wilder-cours.component.html',
  styleUrls: ['./wilder-cours.component.scss']
})
export class WilderCoursComponent implements OnInit {
  @Input() user: User;
  myCours: Cours[] = [];

  constructor(private coursService: CoursService) { }

  ngOnInit() {
    this.coursService.getMyCours(this.user.id).subscribe( data => {
      this.myCours = data;
});
  }
}
