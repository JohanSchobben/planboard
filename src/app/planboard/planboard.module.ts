import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanboardRoutingModule } from './planboard-routing.module';
import { PlanboardComponent } from './planboard.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DEFAULT_PLANBOARD} from './default-planboard';
import {DEFAULT_PLANBOARD_TOKEN} from './services/default-planboard.token';
import { AddWidgetButtonComponent } from './add-widget-button/add-widget-button.component';
import { WidgetDrawerComponent } from './widget-drawer/widget-drawer.component';


@NgModule({
  declarations: [PlanboardComponent, CockpitComponent, AddWidgetButtonComponent, WidgetDrawerComponent],
  imports: [
    CommonModule,
    PlanboardRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class PlanboardModule { }
