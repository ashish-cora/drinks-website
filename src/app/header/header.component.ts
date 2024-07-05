import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('menuIcon') menuIcon: ElementRef;
  @ViewChild('closeIcon') closeIcon: ElementRef;
  @ViewChild('menuModal') menuModal: ElementRef;

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
