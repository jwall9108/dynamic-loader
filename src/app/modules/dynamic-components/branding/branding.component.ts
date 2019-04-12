import { Component, OnInit, Inject } from '@angular/core';
import { DYNAMIC_COMPONENT_DATA } from '@modules/dynamic-loader/constants';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent implements OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) private data) { }

  ngOnInit() {
  }
}
