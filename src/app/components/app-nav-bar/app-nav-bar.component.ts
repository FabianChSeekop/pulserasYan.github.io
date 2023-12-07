import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './app-nav-bar.component.html',
  styleUrl: './app-nav-bar.component.scss'
})
export class AppNavBarComponent {


  toggleMenu() {
    var links = document.querySelector('.nav__bar .links');
    links?.classList.toggle('open');
  }


}
