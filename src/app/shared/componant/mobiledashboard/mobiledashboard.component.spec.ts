import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledashboardComponent } from './mobiledashboard.component';

describe('MobiledashboardComponent', () => {
  let component: MobiledashboardComponent;
  let fixture: ComponentFixture<MobiledashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiledashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobiledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
