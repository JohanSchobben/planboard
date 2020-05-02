import {Widget} from './widget.model';

export interface Planboard {
  title: string;
  widgets: Widget<any>[];
}
