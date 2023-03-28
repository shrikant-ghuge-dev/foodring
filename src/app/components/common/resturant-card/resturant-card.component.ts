import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-card',
  templateUrl: './resturant-card.component.html',
  styleUrls: ['./resturant-card.component.scss']
})
export class ResturantCardComponent implements OnInit {
  price = 250;

  constructor() { }

  ngOnInit(): void {
  }

}
