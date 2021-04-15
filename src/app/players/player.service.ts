import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PlayerShort } from './models/player-short.model';

@Injectable({
  providedIn: "root"
})

export class PlayerService {

  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http.get<{players: PlayerShort[]}>('assets/data/players.json')
  }

}