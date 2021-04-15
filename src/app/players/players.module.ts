import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PlayerListComponent } from './player-list/player-list.component';


@NgModule({
  declarations: [PlayersComponent, PlayerListComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
