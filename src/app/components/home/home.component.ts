import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getYearFrom() {
    return new Date().getFullYear() + ' - ' + (parseInt(new Date().getFullYear().toString().slice(2)) + 1);
  }

}
