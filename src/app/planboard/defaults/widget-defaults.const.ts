import {TodoWidgetMeta} from '../../model/todo-widget.meta';

export interface DefaultsMap {
  todo: TodoWidgetMeta
}

export const metaDefaults: DefaultsMap = {
  todo: {
    title: "mijn nieuw todo",
    tasks: [
      {taskName: "item 1", done: false}
      {taskName: "item 2", done: false}
      {taskName: "item 3", done: false}
    ]

  }
}
