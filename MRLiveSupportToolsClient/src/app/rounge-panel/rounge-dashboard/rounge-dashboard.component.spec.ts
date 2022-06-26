import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoungeDashboardComponent } from './rounge-dashboard.component';

describe('RoungeDashboardComponent', () => {
  let component: RoungeDashboardComponent;
  let fixture: ComponentFixture<RoungeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoungeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoungeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
