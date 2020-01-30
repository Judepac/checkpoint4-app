import { EquipeService } from './../../services/equipe.service';
import { Equipe } from './../../models/equipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  team: Equipe[];

  constructor(private equipeService: EquipeService) { }

  ngOnInit() {
    this.equipeService.getTeam().subscribe( data => {this.team = data; });
  }

}
