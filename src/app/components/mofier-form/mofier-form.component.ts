import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cours } from '../../models/cours';
import { CoursService } from '../../services/cours.service';

@Component({
  selector: 'app-mofier-form',
  templateUrl: './mofier-form.component.html',
  styleUrls: ['./mofier-form.component.scss']
})
export class MofierFormComponent implements OnInit {
  modifierForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<MofierFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Cours, private coursService: CoursService) { }

  ngOnInit() {
    this.modifierForm = this.fb.group({
      id: [this.data.id, Validators.required],
      capacity: [this.data.capacity, Validators.required],
      data: [this.data.date, Validators.required],
      time: [this.data.time, Validators.required],
      lieu: [this.data.lieu, Validators.required],
      formateurName: [this.data.formateurName, Validators.required],
   });
  }
  onFormSubmit(cours: Cours) {
    this.coursService.update(cours).subscribe(() => {
      this.dialogRef.close();
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
