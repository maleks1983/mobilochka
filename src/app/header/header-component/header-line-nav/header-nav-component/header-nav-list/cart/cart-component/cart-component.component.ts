import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  statusCart: string = 'Кошик порожній';
  count: number =0;

  constructor() { }

  ngOnInit(): void {
  }

}
