import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../player-detail/player.model';

import { PlayerShort } from './models/player-short.model';

@Injectable({
  providedIn: "root"
})

export class PlayerService {

  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http.get<{players: PlayerShort[]}>('assets/data/players.json')
  }

  getPlayer(id: number) {
    return this.http.get<Player>('assets/data/player.json')
  }

}