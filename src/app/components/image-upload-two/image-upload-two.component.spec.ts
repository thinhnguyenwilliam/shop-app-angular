import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadTwoComponent } from './image-upload-two.component';

describe('ImageUploadTwoComponent', () => {
  let component: ImageUploadTwoComponent;
  let fixture: ComponentFixture<ImageUploadTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploadTwoComponent]
    });
    fixture = TestBed.createComponent(ImageUploadTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
