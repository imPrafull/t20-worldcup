import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerDetailRoutingModule } from "./player-detail.routing.module";
import { PlayerDetailComponent } from "./player-detail.component";


@NgModule({
  declarations: [
    PlayerDetailComponent
  ],
  imports: [
    CommonModule,
    PlayerDetailRoutingModule
  ],
  exports: [
    PlayerDetailComponent
  ]
})

export class PlayerDetailModule { }
