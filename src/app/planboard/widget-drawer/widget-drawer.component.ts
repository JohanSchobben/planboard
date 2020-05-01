import {Component, EventEmitter, Output} from '@angular/core';
import {WidgetType} from '../../model';

@Component({
  selector: 'app-widget-drawer',
  templateUrl: './widget-drawer.component.html',
  styleUrls: ['./widget-drawer.component.scss']
})
export class WidgetDrawerComponent {
  @Output() add: EventEmitter<WidgetType> = new EventEmitter<WidgetType>();
  widgetType = WidgetType;


}
