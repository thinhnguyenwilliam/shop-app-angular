import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AosComponent } from './aos.component';

describe('AosComponent', () => {
  let component: AosComponent;
  let fixture: ComponentFixture<AosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AosComponent]
    });
    fixture = TestBed.createComponent(AosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
