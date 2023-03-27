import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restroList = [{}, {}, {}];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRestroList();
  }

  getRestroList() {
    this.http.get("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING").subscribe(res => {
      console.log(res);
    })
  }
}
