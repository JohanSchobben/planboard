import {Component, EventEmitter, Output} from '@angular/core';
import {WidgetType} from '../../model';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {PlanboardService} from '../services/planboard.service';

@Component({
  selector: 'app-widget-drawer',
  templateUrl: './widget-drawer.component.html',
  styleUrls: ['./widget-drawer.component.scss']
})
export class WidgetDrawerComponent {
  widgetType = WidgetType;

  constructor(private bottomSheet: MatBottomSheet, private planboardService: PlanboardService){}

  public onAdd(type: WidgetType){
    this.bottomSheet.dismiss();
    this.planboardService.AddWidget(type)
  }


}
