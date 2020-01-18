import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  get currentYear() { return new Date().getFullYear() }
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  showEnvelope: boolean = false;
  showPhone: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
