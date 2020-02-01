import { Discipline } from './../../models/discipline';
import { User } from './../../models/user';
import { CoursService } from './../../services/cours.service';
import { Cours } from './../../models/cours';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  cours: Cours;
  discipline: Discipline;
  ageValidation: number;
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ReservationFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Cours, private coursService: CoursService) { }

  ngOnInit() {
    console.log(this.data);
    this.cours = this.data;

    this.reservationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
   });
  }

  onFormSubmit(reservation: User, coursId: number) {
    this.coursService.makeReservation(reservation, coursId).subscribe(() => {
      this.dialogRef.close();
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
