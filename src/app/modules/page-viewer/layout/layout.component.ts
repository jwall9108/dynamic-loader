import { Component, OnInit } from '@angular/core';
import { StateService } from '@services/state.service';
import { DynamicComponentData } from '@models/dynamic-component-data.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  data = [];
  selectedPage = null;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.data = this.stateService.savedPages;
  }

  load(componentData: DynamicComponentData) {
    this.selectedPage = componentData;
  }
}
