import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Planboard, WidgetType} from '../../model';
import {DEFAULT_PLANBOARD_TOKEN} from './default-planboard.token';
import {Widget} from '../../model/widget.model';

@Injectable({
  providedIn: 'root'
})
export class PlanboardService {
  private planboardSubject: BehaviorSubject<Planboard>;

   constructor(@Inject(DEFAULT_PLANBOARD_TOKEN) defaultPlanboard: Planboard) {
     this.planboardSubject = new BehaviorSubject<Planboard>(defaultPlanboard);
   }

   get planboard$(): Observable<Planboard> {
     return this.planboardSubject.asObservable();
   }

   public updateTitle(newTitle: string): void {
     console.log(newTitle);
     const currentPlanBoard = this.planboardSubject.getValue();
      currentPlanBoard.title = newTitle;
      this.planboardSubject.next(currentPlanBoard);
   }

   public AddWidget(type: WidgetType): void {
     const planboard = this.planboardSubject.getValue();
     const widget: Widget<any> = {
       id: Date.now(),
       left: 0,
       top: 0,
     };
     planboard.widgets.push(widget);


   }
}
