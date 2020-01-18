import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  speed = 100;

  constructor() { }

  ngOnInit() {
    this.applySpeed();
  }


  private applySpeed() {
    const title = document.getElementById('main-title');
    const subtitle = document.getElementById('secondary-title');
    const delay = title.innerHTML.length * this.speed + this.speed;
    this.typeEffect(title, this.speed);

    setTimeout(() => {
      subtitle.style.display = 'inherit';
      this.typeEffect(subtitle, this.speed)
    }, delay);
  }

  typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed)
  }

  toggleMenu(event) {
    this.menuOpen = !this.menuOpen;
  }

}
