import { Component, OnInit, Inject } from '@angular/core';
import { DYNAMIC_COMPONENT_DATA } from '@modules/dynamic-loader/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DYNAMIC_COMPONENT_DATA) private data) {
  }

  ngOnInit() {
  }
}
