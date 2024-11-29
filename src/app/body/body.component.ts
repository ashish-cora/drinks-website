import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  Host,
} from '@angular/core';
import { BreweriesService } from '../breweries.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  providers: [BreweriesService, CurrencyPipe],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    trigger('botTop', [
      state('top', style({ transform: 'translateY(0)' })),
      state('bot', style({ transform: 'translateY(100%)' })),
      transition('top => bot', [animate('0.5s')]),
      transition('bot => top', [animate('0.5s')]),
    ]),
  ],
})
export class BodyComponent {
  headerHeight: number = 64;
  yOffset: number = 0;
  day: string;
  weekDays: string[] = ['sunday', 'monday'];

  isScroll: boolean;

  @ViewChild('scrollDiv') scrollDiv: ElementRef;
  @ViewChild('breweryDiv') breweryDiv: ElementRef;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.isScroll = window.pageYOffset > 0;
    console.log('isScroll', this.isScroll);

    let scrollValueY = window.pageYOffset;

    let viewportHeight = window.innerHeight - this.headerHeight;
    this.yOffset = -viewportHeight;

    if (scrollValueY === 0) {
      this.scrollDiv.nativeElement.style.top = '0px';
      console.log('value 0 chec', this.scrollDiv.nativeElement.style.top);
    } else {
      this.scrollDiv.nativeElement.style.top = `${this.yOffset}px`;
    }
  }
}
