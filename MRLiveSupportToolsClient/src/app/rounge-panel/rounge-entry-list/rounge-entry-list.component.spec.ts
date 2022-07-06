import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoungeEntryListComponent } from './rounge-entry-list.component';

describe('RoungeEntryListComponent', () => {
  let component: RoungeEntryListComponent;
  let fixture: ComponentFixture<RoungeEntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoungeEntryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoungeEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
