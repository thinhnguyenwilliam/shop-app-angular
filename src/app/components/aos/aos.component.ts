import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-aos',
  templateUrl: './aos.component.html',
  styleUrls: ['./aos.component.scss']
})
export class AosComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    AOS.init({
      duration: 3000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function
      once: false // Whether animation should happen only once
    });
  }

  ngAfterViewInit(): void {
    AOS.refresh(); // Ensures new elements are detected
  }
}
