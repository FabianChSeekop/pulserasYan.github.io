import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    const footer = document.getElementById('currentYear');
    if (footer) {
      footer.textContent = new Date().getFullYear() + '';
    }
  }
}
