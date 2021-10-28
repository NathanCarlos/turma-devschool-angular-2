import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customersList: Array<Customer> = [
    { id: 1,
      name: 'Alberto',
      phone: '11987656323',
      email: 'alberto@gmail.com',
      address: 'Av Pauista, 1550'
    },
    { id: 2,
      name: 'Alan',
      phone: '11987656323',
      email: 'alan@gmail.com',
      address: 'Av Pauista, 1550'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
