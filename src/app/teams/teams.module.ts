import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from "./teams-routing.module";
import { TeamsComponent } from './teams.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamListComponent,
    TeamDetailComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
