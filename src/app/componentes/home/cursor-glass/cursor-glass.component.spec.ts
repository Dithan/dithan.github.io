import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorGlassComponent } from './cursor-glass.component';

describe('CursorGlassComponent', () => {
  let component: CursorGlassComponent;
  let fixture: ComponentFixture<CursorGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursorGlassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursorGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
