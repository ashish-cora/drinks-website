import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('menuIcon') menuIcon: ElementRef;
  @ViewChild('closeIcon') closeIcon: ElementRef;
  @ViewChild('menuModal') menuModal: ElementRef;

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
    console.log('asdf00>>', this.menuModal.nativeElement.style.right);
  }

  closeHandler(event: Event): void {
    this.menuIcon.nativeElement.style.display = 'block';
    this.closeIcon.nativeElement.style.display = 'none';
    this.menuModal.nativeElement.style.right = '-100%';
  }
}
