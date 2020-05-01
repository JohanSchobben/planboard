interface Task {
  taskName: string;
  done: boolean;
}

export interface TodoWidgetMeta {
  title: string;
  tasks: Task[]
}
