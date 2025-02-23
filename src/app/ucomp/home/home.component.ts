import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngAfterViewInit() {
    setTimeout(() => {
      const img = document.querySelector('.full-screen-img');
      if (img) {
        img.classList.add('show');
      }
    }, 500); // Delay for smooth effect
  }

}
