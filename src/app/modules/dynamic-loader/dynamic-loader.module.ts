import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderDirective } from './component-loader/component-loader.directive';
import { DYNAMIC_COMPONENT_CONFIG } from './constants';
import { DynamicLoaderConfig } from './dynamic-loader-config.model';

@NgModule({
  declarations: [ComponentLoaderDirective],
  imports: [
    CommonModule
  ],
  exports: [ComponentLoaderDirective],
})
export class DynamicLoaderModule {
  public static forRoot(config: DynamicLoaderConfig): ModuleWithProviders {
    return {
      ngModule: DynamicLoaderModule,
      providers: [
        { provide: DYNAMIC_COMPONENT_CONFIG, useValue: config },
      ]
    };
  }
}
