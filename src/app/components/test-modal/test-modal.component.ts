import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalExampleComponent } from '../modal-example/modal-example.component';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent {
  constructor(private readonly dialog: MatDialog) { }

  openModal() {
    this.dialog.open(ModalExampleComponent, {
      width: '400px',
      disableClose: true,
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms'
    });
  }
}
