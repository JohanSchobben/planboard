import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'planboard', pathMatch: 'full'},
  {path: 'planboard', loadChildren: () => import('./planboard/planboard.module').then(m => m.PlanboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
