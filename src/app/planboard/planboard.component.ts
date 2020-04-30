import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation/navigation.service';
import {PlanboardService} from './services/planboard.service';
import {Observable} from 'rxjs';
import {Planboard} from '../model';

@Component({
  selector: 'app-planboard',
  templateUrl: './planboard.component.html',
  styleUrls: ['./planboard.component.scss']
})
export class PlanboardComponent {
  planboard$: Observable<Planboard>;
  constructor(
    private navigationService: NavigationService,
    private planboardService: PlanboardService
  ) {
    this.planboard$ = planboardService.planboard$;
  }

  public onMenuClick(): void {
    this.navigationService.menuClick();
  }

  onTitleChange(newTitle: string) {
    this.planboardService.updateTitle(newTitle);
  }
}
