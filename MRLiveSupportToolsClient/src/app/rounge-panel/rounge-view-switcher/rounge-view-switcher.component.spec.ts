import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoungeViewSwitcherComponent } from './rounge-view-switcher.component';

describe('RoungeViewSwitcherComponent', () => {
  let component: RoungeViewSwitcherComponent;
  let fixture: ComponentFixture<RoungeViewSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoungeViewSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoungeViewSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
