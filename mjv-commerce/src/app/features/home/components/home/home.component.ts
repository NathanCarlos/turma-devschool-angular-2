import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productsListPhones: Array<Product> = [
    { nome: 'Galaxy S9',
      preco: 2500,
      img: 'https://www.maniavirtual.com.br/content/images/thumbs/0072663_600.gif'
    },
    { nome: 'Galaxy A51',
      preco: 1500,
      img: 'https://www.maniavirtual.com.br/content/images/thumbs/0072663_600.gif'
    },
    { nome: 'IPHONE X',
      preco: 3500,
      img: 'https://m.media-amazon.com/images/I/61AfV1R-w8L._AC_SX425_.jpg'
    },
    { nome: 'Iphone 8',
      preco: 3000,
      img: 'https://m.media-amazon.com/images/I/61AfV1R-w8L._AC_SX425_.jpg'
    }
  ];

  // productListHeadsets: Array<Product> = [
  //   { nome: 'Headeset Gamer Razer', preco: 1000 },
  //   { nome: 'Headeset Gamer Warrior', preco: 300 },
  //   { nome: 'Headeset Gamer Hyperx', preco: 500 }
  // ];

  // productList: Array<Product> = [
  //   { nome: 'PC Gamer 8gb ram ssd 256gb', preco: 4000 },
  //   { nome: 'PC Gamer 8gb ram ssd 256gb', preco: 4000 },
  //   { nome: 'PC Gamer 8gb ram ssd 256gb', preco: 4000 },
  // ]


  constructor() { }

  ngOnInit(): void {

  }

  exibeAlerta() {

  }

}
