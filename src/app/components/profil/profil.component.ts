import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  userOK: string;
  constructor() { }

  ngOnInit() {
  }
  confirme(userFirstname) {
    this.userOK = userFirstname;
  }
}
