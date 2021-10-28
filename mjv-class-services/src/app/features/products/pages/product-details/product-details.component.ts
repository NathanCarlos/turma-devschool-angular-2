import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const product = this.productsService.getProductById(params.id);
      this.product = product;
    });
  }

}
