import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { BreweriesService } from '../breweries.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [BreweriesService],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  headerHeight: number = 64;
  yOffset: number = 0;
  breweryList: any = [];
  filteredBreweryList: any = [];

  @ViewChild('scrollDiv') scrollDiv: ElementRef;
  @ViewChild('breweryDiv') breweryDiv: ElementRef;

  constructor(private breweries: BreweriesService) {}

  ngOnInit(): void {
    this.breweries.getData().subscribe(
      (response) => {
        this.breweryList = response;
        console.log('unfiltered list', this.breweryList);

        this.filterBreweryList();
      },
      (error) => {
        console.error('error fetching breweryList:', error);
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let scrollValueY = window.pageYOffset;
    console.log('scrolling rn', Math.floor(scrollValueY));

    let viewportHeight = window.innerHeight - this.headerHeight;
    this.yOffset = -viewportHeight;

    if (scrollValueY === 0) {
      this.scrollDiv.nativeElement.style.top = '0px';
      console.log('value 0 chec', this.scrollDiv.nativeElement.style.top);
    } else {
      console.log('yoffset', this.yOffset);
      this.scrollDiv.nativeElement.style.top = `${this.yOffset}px`;
      console.log('value else chec', this.scrollDiv.nativeElement.style.top);
    }
  }

  filterBreweryList(): void {
    if (this.breweryList && this.breweryList.length) {
      this.filteredBreweryList = this.breweryList.filter((list: any) =>
        list.name.includes('Barrel')
      );
      this.breweryDiv.nativeElement.innerHTML = this.filteredBreweryList
        .map((data: any) => data.name)
        .join('<br>');
    } else console.log('no list available');
  }
}
