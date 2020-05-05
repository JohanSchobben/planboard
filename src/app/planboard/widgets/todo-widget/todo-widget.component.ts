import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {TodoWidgetMeta, Task} from '../../../model';

@Component({
  selector: 'pb-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent {
  @ViewChild("newItemInput") newItemInput: ElementRef;
  @Input('meta') todoList: TodoWidgetMeta;
  @Output('update') update: EventEmitter<TodoWidgetMeta> = new EventEmitter<TodoWidgetMeta>();
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
    this.newItemInput.nativeElement.value = '';
  }

  public onCheckBoxClick(task: string): void {
    const clickedTask = this.todoList.tasks.find(iteration => iteration.taskName === task);
    clickedTask.done = !clickedTask.done;
  }

  public onTitleChange(newTitle: string): void {
    this.todoList.title = newTitle;
    this.update.emit(this.todoList);
  }

  deleteItem(taskName: string) {
    this.todoList.tasks = this.todoList.tasks.filter(task => task.taskName !== taskName);
    this.update.emit(this.todoList);
  }
}
