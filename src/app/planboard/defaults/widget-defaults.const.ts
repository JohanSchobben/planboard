import {WidgetType} from '../../model';
import {InjectionToken} from '@angular/core';
import clone from "lodash/cloneDeep"

const todoDefault = {
  title: "mijn nieuw todo",
    tasks: [
    {taskName: "item 1", done: true},
    {taskName: "item 2", done: false},
    {taskName: "item 3", done: false},
  ],
};

export const defaultsMap = {
  [WidgetType.Todo]: todoDefault
};

export const DEFAULTS_TOKEN = new InjectionToken("defaults")

export const getDefault = (type: WidgetType) => clone(defaultsMap[type]);
