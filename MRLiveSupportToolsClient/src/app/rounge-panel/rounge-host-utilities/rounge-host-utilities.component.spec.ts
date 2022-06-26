import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoungeHostUtilitiesComponent } from './rounge-host-utilities.component';

describe('RoungeHostUtilitiesComponent', () => {
  let component: RoungeHostUtilitiesComponent;
  let fixture: ComponentFixture<RoungeHostUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoungeHostUtilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoungeHostUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
