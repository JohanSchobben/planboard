import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanboardRoutingModule } from './planboard-routing.module';
import { PlanboardComponent } from './planboard.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import { AddWidgetButtonComponent } from './add-widget-button/add-widget-button.component';
import { WidgetDrawerComponent } from './widget-drawer/widget-drawer.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import { TodoWidgetComponent } from './widgets/todo-widget/todo-widget.component';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [PlanboardComponent, CockpitComponent, AddWidgetButtonComponent, WidgetDrawerComponent, TodoWidgetComponent],
  imports: [
    CommonModule,
    PlanboardRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class PlanboardModule { }
