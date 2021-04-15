import { Component, OnInit } from '@angular/core';

import { MatchService } from '../match.service';
import { MatchOverview } from '../models/match-overview.model';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  filteredMatches: MatchOverview[] = [];
  matches: MatchOverview[] = [];
  matchTypes: MatchType[] = [
    {
      id: 1,
      name: 'Live'
    }, 
    {
      id: 2,
      name: 'Upcoming'
    }, 
    {
      id: 3,
      name: 'Results'
    }
  ];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchTypes = this.matchTypes.map(matchType => {
      const isSelected = matchType.id === 1 ? true: false;
      return {...matchType, isSelected }
    });

    this.matchService.getMatches().subscribe(result => {
      this.matches = result.matches;
      this.filterList(1)
    })

  }

  filterList(id: number) {
    this.filteredMatches = this.matches.filter(match => match.typeId === id);
    this.matchTypes = this.matchTypes.map(matchType => {
      let isSelected = id === matchType.id ? true : false;
      return {...matchType, isSelected}
    })
  }

}

interface MatchType {
  id: number;
  name: string;
  isSelected?: boolean;
}
