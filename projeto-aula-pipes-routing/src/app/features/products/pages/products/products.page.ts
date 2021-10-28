import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPageComponent implements OnInit {

  availableDateProducts: Date = new Date('2021-10-22');

  phoneNumber = '1120876893';
  
  constructor() { }

  ngOnInit(): void {
  }

}
