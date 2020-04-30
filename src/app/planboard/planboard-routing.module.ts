import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlanboardComponent} from './planboard.component';


const routes: Routes = [
  {path: '', component: PlanboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanboardRoutingModule { }
