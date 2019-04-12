import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@modules/shared.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { BrandingComponent } from './branding/branding.component';
import { ProductsComponent } from './products/products.component';

const components = [HeaderComponent, LoginComponent, UserInfoComponent, BrandingComponent, ProductsComponent];

@NgModule({
  declarations: [...components],
  entryComponents: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DynamicComponentsModule { }
