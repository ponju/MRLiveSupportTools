import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchUpSideComponent } from './match-up-side.component';

describe('MatchUpSideComponent', () => {
  let component: MatchUpSideComponent;
  let fixture: ComponentFixture<MatchUpSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchUpSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchUpSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
