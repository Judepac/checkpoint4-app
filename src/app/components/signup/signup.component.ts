import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user: User;
  @Output() item = new EventEmitter();

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
   });
  }
  onFormSubmit(data: User) {
    this.userService.verify(data).subscribe(element =>  {
      this.user = element;
      this.item.emit(element.firstname);
      console.log(this.user);
      return this.router.navigate(['/profil']);
    });

  }
}
