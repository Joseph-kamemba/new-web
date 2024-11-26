import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';


interface product {
  url: string
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  hoveredIndex: number = -1;
  products: product[]=[
    { "url": "/images/slide1.jpg" },
    { "url": "/images/slide2.jpg" },
    { "url": "/images/slide3.jpg" },
    { "url": "/images/slide4.jpg" },
    { "url": "/images/slide5.jpg" }
  ];
   
  ;
  currentSlideIndex = 0;
  private intervalId: any;

constructor(

  private router: Router
){}
nextSlide() {
  this.currentSlideIndex = (this.currentSlideIndex + 1) % this.products.length;
}

previousSlide() {
  this.currentSlideIndex = (this.currentSlideIndex - 1 + this.products.length) 
  % this.products.length;
}


  navigateToShopNow(): void {
    this.router.navigate(['/shopnow']);
  }

}
