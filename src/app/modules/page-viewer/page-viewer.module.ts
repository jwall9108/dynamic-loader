import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageViewerRoutingModule } from './page-viewer-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '@modules/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    PageViewerRoutingModule,
    SharedModule
  ]
})
export class PageViewerModule { }
