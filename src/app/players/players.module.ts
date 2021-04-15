import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailModule } from '../player-detail/player-detail.module';


@NgModule({
  declarations: [PlayersComponent, PlayerListComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    PlayerDetailModule
  ]
})
export class PlayersModule { }
