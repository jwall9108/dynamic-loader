import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBuilderRoutingModule } from './page-builder-routing.module';
import { LayoutComponent, SaveDialogComponent } from './layout/layout.component';
import { SharedModule } from '@modules/shared.module';

@NgModule({
  declarations: [LayoutComponent, SaveDialogComponent],
  entryComponents: [SaveDialogComponent],
  imports: [
    CommonModule,
    PageBuilderRoutingModule,
    SharedModule,
  ]
})
export class PageBuilderModule { }
