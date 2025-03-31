import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTranslateComponent } from './test-translate.component';

describe('TestTranslateComponent', () => {
  let component: TestTranslateComponent;
  let fixture: ComponentFixture<TestTranslateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTranslateComponent]
    });
    fixture = TestBed.createComponent(TestTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
