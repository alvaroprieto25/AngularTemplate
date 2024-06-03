import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  // TODO: permitir videos
  swiperImages: string[] = [
    'https://images.hdqwalls.com/download/dock-side-mountains-sky-landscape-gs-1920x1080.jpg',
    'https://s1.1zoom.me/b5045/893/Canada_Lake_Forests_511363_1920x1080.jpg',
    'https://s1.1zoom.me/b5050/795/USA_Scenery_Sunrises_and_sunsets_Sky_HDR_Florida_515963_1920x1080.jpg',
    'https://th.bing.com/th/id/R.2c57158421e70052a5cd37e63505472a?rik=rZ1a9SDg8etiJQ&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f07%2fLandscape-wallpapers-20.jpg&ehk=efYckqX6isJQS4qYHcoS%2bSi9PByYf0bj3Xg9h%2fwwTyc%3d&risl=&pid=ImgRaw&r=0',
    'https://media0.giphy.com/media/LZ2WRdQu8udNPSZxbg/giphy.gif',
  ];

  constructor(private elementRef: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      // TODO: autoplay no funciona
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
}
