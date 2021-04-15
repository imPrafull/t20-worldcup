import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatchOverview } from './models/match-overview.model';

@Injectable({
  providedIn: "root"
})

export class MatchService {

  constructor(private http: HttpClient) {}

  getMatches() {
    return this.http.get<{matches: MatchOverview[]}>('assets/data/matches.json')
  }

}