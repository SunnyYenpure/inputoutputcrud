import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashboaredComponent } from './todo-dashboared.component';

describe('TodoDashboaredComponent', () => {
  let component: TodoDashboaredComponent;
  let fixture: ComponentFixture<TodoDashboaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashboaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
