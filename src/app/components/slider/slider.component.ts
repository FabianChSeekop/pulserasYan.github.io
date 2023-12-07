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

  images = [
    'https://media.istockphoto.com/id/1448374711/es/foto/las-manos-de-los-ni%C3%B1os-tejen-un-juguete-con-cuentas-en-una-mesa-entre-cajas-con-cuentas-vista.jpg?s=1024x1024&w=is&k=20&c=DUZJdWzlIM92jZvY9K34oHrFf35l5mVUAH3KekmF4i4=',
    'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816459_1280.jpg'  ,
    'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816459_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/10/08/11/59/beads-2829676_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816459_1280.jpg'
  ]

}
