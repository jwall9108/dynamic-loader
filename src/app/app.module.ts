import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@modules/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Utility } from '@shared/utility';
import { DynamicLoaderModule } from '@modules/dynamic-loader/dynamic-loader.module';
import { DynamicComponentsModule } from '@modules/dynamic-components/dynamic-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    DynamicComponentsModule,
    DynamicLoaderModule.forRoot({ componentMap: Utility.getComponentMap() })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
