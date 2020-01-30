import { EquipeService } from './../../services/equipe.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  team: User[];

  constructor(private equipeService: EquipeService) { }

  ngOnInit() {
    this.equipeService.getTeam().subscribe( data => {this.team = data; });
  }

}
