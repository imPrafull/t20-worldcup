import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PlayerDetailComponent } from "./player-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PlayerDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PlayerDetailRoutingModule {}