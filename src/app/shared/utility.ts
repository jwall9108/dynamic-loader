
import { Type } from '@angular/core';
import { ComponentType } from './enum';
import { HeaderComponent } from '@modules/dynamic-components/header/header.component';
import { UserInfoComponent } from '@modules/dynamic-components/user-info/user-info.component';
import { LoginComponent } from '@modules/dynamic-components/login/login.component';
import { BrandingComponent } from '@modules/dynamic-components/branding/branding.component';
import { ProductsComponent } from '@modules/dynamic-components/products/products.component';

export abstract class Utility {
    static getComponentMap() {
        return new Map<ComponentType, Type<{}>>([
            [ComponentType.header, HeaderComponent],
            [ComponentType.userInfo, UserInfoComponent],
            [ComponentType.login, LoginComponent],
            [ComponentType.branding, BrandingComponent],
            [ComponentType.product, ProductsComponent]
        ]);
    }
}
