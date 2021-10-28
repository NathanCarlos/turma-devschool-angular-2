import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  title = 'Lista de Produtos';

  products: Array<Product> = [];

  filteredProducts: Array<Product> = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
      this.products = this.productsService.getProducts();
      this.filteredProducts = this.products;
  }

  getProductsByDescription(event: any) {
      const value = event.target.value;

      this.filteredProducts = this.products.filter(
          (product) => product.description.toUpperCase().search(value.toUpperCase()) > -1);
      if(value.length === 0) {
          this.filteredProducts = this.products;
      }
  }

  transformPrice(preco: number) {
      return `R$${preco},00`;
  }

}
