import {WidgetType} from './widget-type.enum';

export interface Widget<T> {
  id: number;
  type: WidgetType;
  left: number;
  top: number;
  meta?: T

}
