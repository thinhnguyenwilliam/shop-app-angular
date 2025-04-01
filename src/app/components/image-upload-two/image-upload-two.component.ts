import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-image-upload-two',
  templateUrl: './image-upload-two.component.html',
  styleUrls: ['./image-upload-two.component.scss']
})
export class ImageUploadTwoComponent {
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(public dialog: MatDialog) { }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  openDialog(): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageSrc: this.imagePreview },
      width: '80%',
      height: '80%'
    });
  }

  // Handle keyboard events for accessibility
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openDialog();  // Trigger the dialog on Enter or Space key press
    }
  }
}