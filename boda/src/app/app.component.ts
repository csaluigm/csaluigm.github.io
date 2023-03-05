import { Component, OnInit } from '@angular/core';
declare var simplyCountdown: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hotelGroups = [
    [
      {
        name: 'Pamplona El Toro Hotel & Spa ',
        stars: 4,
        website: 'https://www.hotelpamplonaeltoro.com/es/',
        link: 'https://maps.app.goo.gl/4jBzCQjzxR7Sbsfg8'
      },
      {
        name: 'Hotel Tres Reyes ',
        stars: 4,
        website: 'https://www.hotel3reyes.com/es/',
        link: 'https://maps.app.goo.gl/TJ6cFpaw4nkyCr4b8'
      },
      {
        name: 'Hotel Maisonave ',
        stars: 4,
        website: 'https://www.hotelmaisonnave.es/',
        link: 'https://maps.app.goo.gl/WsqXbJX519xAfMT9A'
      }
    ],
    [
      {
        name: 'Hotel Pompaelo Urban & Spa',
        stars: 4,
        website: 'https://www.hotelpompaelo.com/',
        link: 'https://maps.app.goo.gl/zN8qdgGaYNFW1XmY9'
      },
      {
        name: 'Hotel Leyre',
        stars: 3,
        website: 'https://www.hotel-leyre.com/',
        link: 'https://maps.app.goo.gl/5MuUtrydJbMpJZeB9'
      },

      { name: 'Hotel Ciudadela Pamplona', stars: 3, website: 'https://www.hotelciudadela.es/es/', link: 'https://maps.app.goo.gl/KGZoHxYtht16BeDG7' },
    ],
    [
      { name: 'Hotel Sercotel Europa', stars: 3, website: 'https://www.hoteleuropapamplona.com/', link: 'https://maps.app.goo.gl/qtqXqS7AbxF1K3hJA' },
      { name: 'Hotel Yoldi Pamplona', stars: 3, website: 'https://www.hotelyoldi.com/', link: 'https://maps.app.goo.gl/GLKDfLSKcmaGcUPv5' },
    ]
  ]
  
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
