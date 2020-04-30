import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanboardComponent } from './planboard.component';

describe('PlanboardComponent', () => {
  let component: PlanboardComponent;
  let fixture: ComponentFixture<PlanboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
