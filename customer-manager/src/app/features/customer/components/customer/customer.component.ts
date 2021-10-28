import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input()
  customer?: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
