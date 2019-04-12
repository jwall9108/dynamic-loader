import { Component, OnInit, Inject } from '@angular/core';
import { DYNAMIC_COMPONENT_DATA } from '@modules/dynamic-loader/constants';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) private data) { }

  ngOnInit() {
  }
}
