import { Type } from '@angular/core';

export interface DynamicLoaderConfig {
    componentMap: Map<any, Type<{}>>;
}
