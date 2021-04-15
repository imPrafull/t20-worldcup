import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PlayerService } from '../players/player.service';
import { Player } from './player.model';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  id!: number;
  player!: Player;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.playerService.getPlayer(this.id).subscribe(player => {
        this.player = player;
      })
    });
  }

}
