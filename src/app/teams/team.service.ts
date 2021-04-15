import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TeamShort } from './models/team-short.model';
import { Team } from './models/team.model';

@Injectable({
  providedIn: "root"
})

export class TeamService {

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get<{teams: TeamShort[]}>('assets/data/teams.json')
  }

  getTeam(id: number) {
    return this.http.get<Team>('assets/data/team.json')
  }

}