import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoungeProfileEditorComponent } from './rounge-profile-editor.component';

describe('RoungeProfileEditorComponent', () => {
  let component: RoungeProfileEditorComponent;
  let fixture: ComponentFixture<RoungeProfileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoungeProfileEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoungeProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
