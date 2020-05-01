import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pb-add-widget-button',
  templateUrl: './add-widget-button.component.html',
  styleUrls: ['./add-widget-button.component.scss']
})
export class AddWidgetButtonComponent {
  @Output() open: EventEmitter<void> = new EventEmitter<void>();
}
