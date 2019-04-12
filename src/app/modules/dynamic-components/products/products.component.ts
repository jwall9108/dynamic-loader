import { Component, OnInit, Inject } from '@angular/core';
import { DYNAMIC_COMPONENT_DATA } from '@modules/dynamic-loader/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) private data) { }

  ngOnInit() {
  }

  buildPath(imageSrc: string) {
    return `./assets/${imageSrc}`;
  }
}
