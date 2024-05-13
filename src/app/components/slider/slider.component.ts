import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  images = ['https://cdn.pixabay.com/photo/2018/04/17/17/28/amethyst-3328166_1280.jpg'
  ]

}
