import { Component, HostListener, OnInit } from '@angular/core';
import { hotelGroups } from './hotels';
import { planning } from './planning';
import { images } from './images';
import * as Aos from 'aos';
import { ViewportScroller } from '@angular/common';

declare var simplyCountdown: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hotelGroups = hotelGroups;
  planning = planning;
  images = images;
  Aos = Aos;
  gallery = [];
  isScrolled: boolean;

  constructor(private viewPortScroller: ViewportScroller) {
    this.isScrolled = false;
   }

  ngOnInit(): void {
    this.setCountdown();
    this.parallax();
    // this.goToTop();
    this.Aos.init();
  }

  getSide(index: number) {
    return index % 2 != 0 ? 'fade-left' : 'fade-right';
  }

  goToTop() {
    $('.js-gotop').on('click', (event: any) => {
      event.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $('html').offset().top,
        },
        500,
        'easeInOutExpo',
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
   if (window.scrollY > 200) {
      this.isScrolled = true;
   } else {
      this.isScrolled = false;
   }
  }
   scrollToTop() {
    this.viewPortScroller.scrollToPosition([0, 0]);
   }

  parallax() {
    // $(window).stellar();
    $(window).stellar({ horizontalScrolling: false });
  }

  counter() {
    $('.js-counter').countTo({
      formatter: (value: any, options: any) => {
        return value.toFixed(options.decimals);
      },
    });
  }


  setCountdown(): void {
  // Months are 0-based (0 for January, 11 for December)
  const utcDate = new Date(Date.UTC(2024, 5, 22, 11, 45));
  // const utcDate = new Date(Date.UTC(2023, 9, 21, 21, 11));

    var countdownArgs={
      year: utcDate.getFullYear(),
      month: utcDate.getMonth() + 1,
      day: utcDate.getDate(),
      hours: utcDate.getHours(),
      minutes: utcDate.getMinutes(),
      seconds: utcDate.getSeconds(),
      enableUtc:true,

    onEnd: function () {
        console.log("💍")
                return;
            },
    }

    console.log(countdownArgs)
    simplyCountdown('.simply-countdown-one', countdownArgs);
  }
}
