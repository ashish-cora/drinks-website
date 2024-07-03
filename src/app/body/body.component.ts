import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  yOffset: number = 0;
  @ViewChild('scrollDiv') scrollDiv: ElementRef;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // console.log('page is scrolling rn');
    let viewportHeight = window.innerHeight;
    this.yOffset = -viewportHeight;
    console.log('asdf---->>', this.scrollDiv.nativeElement.style.y);
  }
}
