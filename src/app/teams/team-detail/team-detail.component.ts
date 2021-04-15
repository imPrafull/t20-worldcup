import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Team } from '../models/team.model';

import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  id!: number;
  team!: Team;

  constructor(private route: ActivatedRoute, private router: Router, private TeamService: TeamService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.TeamService.getTeam(this.id).subscribe(team => {
        this.team = team;
      })
    });
  }

}
