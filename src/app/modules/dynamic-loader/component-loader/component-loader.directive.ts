import { ViewContainerRef, Input, ComponentFactoryResolver, Injector, OnInit, Directive, Inject } from '@angular/core';
import { ComponentType } from '@shared/enum';
import { DynamicComponentData } from '@models/dynamic-component-data.model';
import { DYNAMIC_COMPONENT_CONFIG, DYNAMIC_COMPONENT_DATA } from '../constants';
import { DynamicLoaderConfig } from '../dynamic-loader-config.model';

@Directive({
  selector: '[appComponentLoader]'
})
export class ComponentLoaderDirective {

  @Input() set data(component: DynamicComponentData) {
    this.load(component);
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    @Inject(DYNAMIC_COMPONENT_CONFIG) private config: DynamicLoaderConfig
  ) {
  }

  load(component: DynamicComponentData): any {
    if (!component) {
      throw new Error('failed to load dynamic component.  No component data provided');
    }

    const factory = this.getComponentFactory(component.meta.type);

    const injector = this.createInjector(component.data, this.viewContainerRef.parentInjector);

    this.viewContainerRef.createComponent(factory, null, injector);
  }

  getComponentFactory(type: ComponentType) {
    const factoryClass = this.config.componentMap.get(type);

    if (!factoryClass) {
      throw new Error(`Component factory (${type}) not found`);
    }

    return this.resolver.resolveComponentFactory(factoryClass);
  }

  createInjector(data: DynamicComponentData, parentInjector: Injector) {
    const staticProvider = [{ provide: DYNAMIC_COMPONENT_DATA, useValue: data }];

    return Injector.create(staticProvider, parentInjector);
  }
}
