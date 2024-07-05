import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  headerHeight: number = 64;
  yOffset: number = 0;

  @ViewChild('scrollDiv') scrollDiv: ElementRef;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let scrollValueY = window.pageYOffset;
    console.log('scrolling rn', Math.floor(scrollValueY));

    let viewportHeight = window.innerHeight - this.headerHeight;
    this.yOffset = -viewportHeight;

    if (scrollValueY == 0) {
      this.scrollDiv.nativeElement.style.top = 0;
      console.log('value 0 chec', this.scrollDiv.nativeElement.style.top);
    } else {
      this.scrollDiv.nativeElement.style.top = this.yOffset;
      console.log('value else chec', this.scrollDiv.nativeElement.style.top);
    }
  }
}
