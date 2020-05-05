import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Planboard, WidgetType} from '../../model';
import {DEFAULT_PLANBOARD_TOKEN} from './default-planboard.token';
import {Widget} from '../../model/widget.model';
import {DEFAULTS_TOKEN, getDefault} from '../defaults/widget-defaults.const';
import clone from "lodash/cloneDeep"

@Injectable({
  providedIn: 'root'
})
export class PlanboardService {
  private planboardSubject: BehaviorSubject<Planboard>;

   constructor(
     @Inject(DEFAULTS_TOKEN) private metaMap: any,
     @Inject(DEFAULT_PLANBOARD_TOKEN) defaultPlanboard: Planboard
   ) {
     this.planboardSubject = new BehaviorSubject<Planboard>(defaultPlanboard);
   }

   get planboard$(): Observable<Planboard> {
     return this.planboardSubject.asObservable();
   }

   public updateTitle(newTitle: string): void {
     const currentPlanBoard = clone(this.planboardSubject.getValue());
      currentPlanBoard.title = newTitle;
      this.planboardSubject.next(currentPlanBoard);
   }

   public AddWidget(type: WidgetType): void {
     const currentPlanBoard = clone(this.planboardSubject.getValue());
     const widget: Widget<any> = {
       id: Date.now(),
       type,
       left: 0,
       top: 0,
       meta: getDefault(type)
     };

     currentPlanBoard.widgets.push(widget);
     this.planboardSubject.next(currentPlanBoard);
   }

   public updateMeta(id: number, meta: any){
     const currentPlanBoard = clone(this.planboardSubject.getValue());
     const widget: Widget<any> = currentPlanBoard.widgets.find(widget => widget.id === id);
     widget.meta = meta;
     this.planboardSubject.next(currentPlanBoard);
   }
}
