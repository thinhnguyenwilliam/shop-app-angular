import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent {
  zoomLevel = 1;

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imageSrc: string }
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  zoomImage(event: WheelEvent): void {
    event.preventDefault();
    const zoomStep = 0.1;
    if (event.deltaY < 0) {
      this.zoomLevel += zoomStep;
    } else if (event.deltaY > 0 && this.zoomLevel > 1) {
      this.zoomLevel -= zoomStep;
    }

    const img = document.querySelector('.zoomable') as HTMLImageElement;
    img.style.transform = `scale(${this.zoomLevel})`;
  }
}
