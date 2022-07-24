import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchUpProfileEditorComponent } from './match-up-profile-editor.component';

describe('MatchUpProfileEditorComponent', () => {
  let component: MatchUpProfileEditorComponent;
  let fixture: ComponentFixture<MatchUpProfileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchUpProfileEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchUpProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
