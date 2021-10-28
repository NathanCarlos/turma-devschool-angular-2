import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  card?: Boolean;

  @Input()
  product?: Product;

  percentDiscount = 5;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addToCart() {
    alert(`O produto ${this.product?.description} foi adicionado ao carrinho!`);
  }

  getPriceWithDiscount(price: number): number {
    return price * ((100 - 5) / 100);
  }

  navigateToDetails() {
    this.router.navigateByUrl(`product-details/${this.product?.id}`);
  }

}
