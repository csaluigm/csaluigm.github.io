import { Component, OnInit } from '@angular/core';
declare var simplyCountdown: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    var d = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
    console.log("working");
    // default example
    simplyCountdown('.simply-countdown-one', {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    });

    //jQuery example
    $('#simply-countdown-losange').simplyCountdown({
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      enableUtc: false
    });
  }
  title = 'boda';


}
