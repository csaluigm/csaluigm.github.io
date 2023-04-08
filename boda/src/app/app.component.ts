import { Component, OnInit } from '@angular/core';
import { hotelGroups } from './hotels';
import { planning } from './planning';
import { images } from './images';

declare var simplyCountdown: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hotelGroups =  hotelGroups;
  planning =  planning;
  images =  images;
  gallery =[]

  ngOnInit(): void {
    this.setCountdown()
    this.parallax()
    this.goToTop()
  }

	goToTop() {

		$('.js-gotop').on('click', (event:any) =>{
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	parallax() {
		$(window).stellar();
	};

	counter() {
		$('.js-counter').countTo({
			 formatter: (value:any, options:any) =>{
	      return value.toFixed(options.decimals);
	    },
		});
	};

	// counterWayPoint() {
	// 	if ($('#fh5co-counter').length > 0 ) {
	// 		$('#fh5co-counter').waypoint( ( direction:any )=> {
	// 									
	// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
	// 				setTimeout( this.counter , 400);					
	// 				$(this.element).addClass('animated');
	// 			}
	// 		} , { offset: '90%' } );
	// 	}
	// };
  //
  setCountdown(): void {
    var d = new Date("Jun 22, 2024 12:00:00");

    simplyCountdown('.simply-countdown-one', {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    });

  }

}
