import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MatchesComponent } from "./matches.component";
import { MatchDetailComponent } from "./match-detail/match-detail.component";

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent
  },
  {
    path: ':id',
    component: MatchDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class MatchesRoutingModule {}