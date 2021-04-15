import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatchesRoutingModule } from "./matches-routing.module";
import { MatchesComponent } from './matches.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';


@NgModule({
  declarations: [
    MatchesComponent,
    MatchListComponent,
    MatchDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatchesRoutingModule
  ]
})

export class MatchesModule { }
