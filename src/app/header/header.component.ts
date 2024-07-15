import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormBuilder } from '@angular/forms';
import { BreweriesService } from '../breweries.service';
import { Constants } from '../config/constants';
import { map } from 'rxjs';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface menuDropDownListType {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  typeValue = '';
  articles: any = [];
  articlesContainer: any = [];
  filteredCityValueList: string[] = [];
  showSuggestions: boolean = false;
  showResult: boolean = false;
  searchForm = this.fb.nonNullable.group({ searchValue: '' });
  searchValue: string = '';
  breweryList: any = [];
  filteredBreweryList: any = [];
  amount: string[];
  errorMsg = '';
  isOpen: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private breweries: BreweriesService,
    private constants: Constants
  ) {}

  ngOnInit(): void {
    // this.breweries
    //   .getData()
    //   .pipe(tap((tempo) => this.articles.push(tempo.name)))
    //   .subscribe(() => console.log('articles=', this.articles));
    // this.articlesContainer && this.articlesContainer.length > 0
    //   ? this.articlesContainer.map((tempo: any) =>
    //       this.articles.push(tempo.name)
    //     )
    //   : console.log('return');
    this.fetchBreweryName();
  }

  fetchBreweryName() {
    this.breweries
      .getData()
      .pipe(map((tempo: any[]) => tempo.map((val) => val.name)))
      .subscribe(
        (name) => {
          this.articles = name;
        },
        (error) => console.error('error fetching breweries', error)
      );
  }

  @ViewChild('menuIcon') menuIcon: ElementRef;
  @ViewChild('closeIcon') closeIcon: ElementRef;
  @ViewChild('menuModal') menuModal: ElementRef;
  @ViewChild('searchBar') searchBar: ElementRef;
  @ViewChild('suggestionBox') suggestionBox: ElementRef;

  menuDropDownList: menuDropDownListType[] = [
    { label: 'Shop', path: '/shop' },
    { label: 'Wholesale Inquiries', path: '/inquiries' },
    { label: 'About', path: '/about' },
    { label: 'Find Us', path: '/find-us' },
    { label: 'Create an Account', path: '/create-account' },
  ];

  menuHandler(event: Event): void {
    this.closeIcon.nativeElement.style.display = 'block';
    this.menuIcon.nativeElement.style.display = 'none';
    this.menuModal.nativeElement.style.right = ' 0px';
  }

  closeHandler(event: Event): void {
    this.menuIcon.nativeElement.style.display = 'block';
    this.closeIcon.nativeElement.style.display = 'none';
    this.menuModal.nativeElement.style.right = '-100%';
  }

  getCityValue(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('event--', target.value);

    this.typeValue = target.value;

    if (this.typeValue && this.articles.length > 0) {
      this.filteredCityValueList = this.articles.filter((val: string) =>
        val.toLowerCase().includes(this.typeValue.toLowerCase())
      );
      this.showSuggestions = false;
      this.showResult = true;
    } else {
      this.showSuggestions = true;
    }
  }

  onSearchSubmit() {
    this.searchValue = this.searchForm.value.searchValue ?? '';
  }
  recommend() {
    this.typeValue
      ? ((this.showSuggestions = false), (this.showResult = true))
      : ((this.showSuggestions = true), (this.showResult = false));

    this.suggestionBox.nativeElement.style.display = 'block';
  }

  appearSearchBar() {
    this.isOpen
      ? (this.searchBar.nativeElement.style.width = '0')
      : (this.searchBar.nativeElement.style.width = '150px');
    this.isOpen = !this.isOpen;
  }

  onBlur() {
    this.suggestionBox.nativeElement.style.display = 'none';
    this.showSuggestions = false;
    this.showResult = false;
  }
}
