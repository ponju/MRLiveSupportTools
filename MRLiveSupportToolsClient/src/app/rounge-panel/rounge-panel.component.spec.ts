import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoungePanelComponent } from './rounge-panel.component';

describe('RoungeDashboardComponent', () => {
  let component: RoungePanelComponent;
  let fixture: ComponentFixture<RoungePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoungePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoungePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
