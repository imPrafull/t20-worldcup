import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TeamShort } from '../models/team-short.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teams: TeamShort[] = [];

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(result => {
      this.teams = result.teams;
    })
  }

  goToTeamDetails(id: number) {
    this.router.navigate(['/', 'teams', id])
  }

}
