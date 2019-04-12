import { Component, OnInit, Inject } from '@angular/core';
import { DYNAMIC_COMPONENT_DATA } from '@modules/dynamic-loader/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) private data) {
  }

  ngOnInit() {
    console.log(this.data);
  }
}
