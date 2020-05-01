import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, pluck} from 'rxjs/operators';

@Component({
  selector: 'pb-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements AfterViewInit, OnDestroy {
  @Input() planboardTitle: string;
  @Output() menuClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild("titleInput") inputElement: ElementRef;
  inputChangeSubscription: Subscription;

  ngAfterViewInit(): void {
    this.inputChangeSubscription = fromEvent(this.inputElement.nativeElement, "input")
      .pipe(
        debounceTime(300),
        pluck("target", "value"),
        distinctUntilChanged()
      ).subscribe((newTitle: string) => {
        this.titleChange.emit(newTitle);
      })
  }

  ngOnDestroy(): void {
    this.inputChangeSubscription.unsubscribe();
  }
}
