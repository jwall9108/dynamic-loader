import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'create', pathMatch: 'full'
  },
  {
    path: 'create', loadChildren: './modules/page-builder/page-builder.module#PageBuilderModule'
  },
  {
    path: 'view', loadChildren: './modules/page-viewer/page-viewer.module#PageViewerModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
