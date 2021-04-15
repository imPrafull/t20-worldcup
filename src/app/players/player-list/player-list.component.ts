import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerShort } from '../models/player-short.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players: PlayerShort[] = [];

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(result => {
      this.players = result.players;
    });
  }

  goToPlayerDetail(id: number) {
    this.router.navigate(['/', 'player', id])
  }

}
