import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent {
  constructor(public dialogRef: MatDialogRef<ModalExampleComponent>) { }

  close() {
    this.dialogRef.close();
  }
}
