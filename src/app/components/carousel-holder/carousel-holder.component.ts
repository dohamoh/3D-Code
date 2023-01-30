import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']

})

export class CarouselHolderComponent {
  customOptions: OwlOptions = {
    loop: true,

    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    autoplaySpeed: 950,
    dotsSpeed: 500,
    autoplayMouseleaveTimeout: 1100,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,

    smartSpeed: 400,
    dragEndSpeed: 350,

    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }
  activeSlides: any;

  ourWork: any[] = [
    { imgUrl: '../../../assets/Project/1/WhatsApp_Image_2023-01-02_at_22.25.58__1_-removebg-preview.png' },
    { imgUrl: '../../../assets/Project/2.jpeg' },
    { imgUrl: '../../../assets/Project/1/WhatsApp Image 2023-01-02 at 22.25.54.jpeg' },
    { imgUrl: '../../../assets/Project/1/WhatsApp Image 2023-01-02 at 22.26.02 (2).jpeg' },
  ]
}
