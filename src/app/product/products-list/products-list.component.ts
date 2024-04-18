import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  title: string = 'Welcome to products list page';
  color: string = 'red';
  product = {
    id: 1,
    name: 'Iphone',
    quantity: 4,
    nb_likes: 4,
  };
  products = [
    {
      id: 1,
      name: 'Iphone',
      quantity: 4,
      nb_likes: 4,
    },
    {
      id: 2,
      name: 'TV',
      quantity: 9,
      nb_likes: 1,
    },
    {
      id: 3,
      name: 'PC',
      quantity: 0,
      nb_likes: 6,
    },
  ];
  panier:any[]=[]
  Buy(p:any) {
    p.quantity--;
    if (this.panier.length == 0) this.panier.push({ product: p, quantity: 1 });
    else {
      this.panier.forEach((element) => {
        console.log(element);
        if (element.product.id === p.id) {
          console.log(element)
          element.quantity++;
        } else {
          console.log(element);
          this.panier.push({ product: p, quantity: 1 });
        }
      })
    } 
  }
}
