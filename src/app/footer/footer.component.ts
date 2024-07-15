import { Component } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faViber,
  faWhatsapp,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatIcon, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faViber = faViber;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
}
