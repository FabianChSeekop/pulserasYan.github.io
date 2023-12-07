import { Component, Input } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-cards',
  standalone: true,
  imports: [CardProductComponent, CommonModule],
  templateUrl: './grid-cards.component.html',
  styleUrl: './grid-cards.component.scss'
})
export class GridCardsComponent {


  @Input() cards: any = [
    {
      image: 'https://images.unsplash.com/photo-1647065201693-b7a7be997626?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816459_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816459_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816455_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816459_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816455_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816459_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816455_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816455_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/11/11/11/21/jars-1816455_1280.jpg',
      title: 'Pulsera duo',
      description: 'Pulsera duo'
    },
  ]

}
