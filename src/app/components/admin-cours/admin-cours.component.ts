import { CoursService } from './../../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from '../../models/cours';
import { MofierFormComponent } from '../mofier-form/mofier-form.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-cours',
  templateUrl: './admin-cours.component.html',
  styleUrls: ['./admin-cours.component.scss']
})
export class AdminCoursComponent implements OnInit {
  listCourt: Cours[] = [];

  constructor(private coursService: CoursService, public dialog: MatDialog) { }

  ngOnInit() {
    this.coursService.getCours().subscribe( data => {
      this.listCourt = data;
    });
  }
modifier(cours: Cours) {
  const dialogRef = this.dialog.open(MofierFormComponent, {
    width: '45vw',
    disableClose: true,
    data: cours
  });

  dialogRef.afterClosed().subscribe(result => {
  });
}

}

