import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {

  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Simulate API call
  }
}
