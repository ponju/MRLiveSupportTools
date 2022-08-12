import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoungeConfigEditorComponent } from './rounge-config-editor.component';

describe('RoungeProfileEditorComponent', () => {
  let component: RoungeConfigEditorComponent;
  let fixture: ComponentFixture<RoungeConfigEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoungeConfigEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoungeConfigEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
