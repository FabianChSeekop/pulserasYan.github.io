import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppNavBarComponent } from "./components/app-nav-bar/app-nav-bar.component";
import { SliderComponent } from './components/slider/slider.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, AppNavBarComponent,SliderComponent,GridCardsComponent,FloatButtonComponent]
})
export class AppComponent {
  title = 'online-store';
}
