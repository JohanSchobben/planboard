import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation/navigation.service';
import {PlanboardService} from './services/planboard.service';
import {Observable} from 'rxjs';
import {Planboard, WidgetType} from '../model';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {WidgetDrawerComponent} from './widget-drawer/widget-drawer.component';

@Component({
  selector: 'pb-planboard',
  templateUrl: './planboard.component.html',
  styleUrls: ['./planboard.component.scss']
})
export class PlanboardComponent {
  planboard$: Observable<Planboard>;
  constructor(
    private navigationService: NavigationService,
    private planboardService: PlanboardService,
    private bottomSheet: MatBottomSheet
  ) {
    this.planboard$ = planboardService.planboard$;
  }

  public onMenuClick(): void {
    this.navigationService.menuClick();
  }

  public onTitleChange(newTitle: string) {
    this.planboardService.updateTitle(newTitle);
  }

  public openWidgetDrawer(): void {
    this.bottomSheet.open(WidgetDrawerComponent);

  }

  public onAdd(type: WidgetType){
    this.bottomSheet.dismiss();
    this.planboardService.AddWidget(type)
  }
}
