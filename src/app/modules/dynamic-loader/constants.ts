import { InjectionToken } from '@angular/core';
import { DynamicLoaderConfig } from './dynamic-loader-config.model';

export const DYNAMIC_COMPONENT_DATA = new InjectionToken<any>('DynamicComponentData');
export const DYNAMIC_COMPONENT_CONFIG = new InjectionToken<DynamicLoaderConfig>('DynamicComponentConfig');
