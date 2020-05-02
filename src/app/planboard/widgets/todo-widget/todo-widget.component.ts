import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {TodoWidgetMeta, Task} from '../../../model';

@Component({
  selector: 'pb-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent {
  @Input('meta') todoList: TodoWidgetMeta;
  @Input('update') update: EventEmitter<TodoWidgetMeta> = new EventEmitter<TodoWidgetMeta>();
  showError = false;

  public onAdd(newItem: string): void {
    const inList = this.todoList.tasks.some(task => task.taskName === newItem);
    const newTask = {taskName: newItem, done: false};

    if (inList){
      this.showError = true;
      return;
    }

    this.todoList.tasks.push(newTask);
    this.update.emit(this.todoList);
  }

  public onCheckBoxClick(task: Task): void {
    const clickedTask = this.todoList.tasks.find(iteration => iteration.taskName === task.taskName);
    clickedTask.done = !clickedTask.done;
  }

  public onTitleChange(newTitle: string): void {
    this.todoList.title = newTitle;
  }

}
