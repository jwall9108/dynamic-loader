import { ComponentType } from '@shared/enum';

export interface DynamicComponentData {
    meta: {
        type: ComponentType
    };
    data?: any;
}
