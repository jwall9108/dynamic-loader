import { Injectable } from '@angular/core';
import { DynamicComponentData } from '@models/dynamic-component-data.model';
import { ComponentType } from '@shared/enum';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  savedPages: { name: string, componentData: DynamicComponentData[] }[] = [];

  constructor() { }

  savePage(name: string, componentData: DynamicComponentData[]) {
    this.savedPages.push({ name, componentData });
  }

  getMockData(type: ComponentType): DynamicComponentData {
    switch (type) {
      case ComponentType.login:
        return {
          meta: {
            type: ComponentType.login
          },
          data: {
            userName: 'John Doe',
            title: 'Login'
          }
        };
      case ComponentType.header:
        return {
          meta: {
            type: ComponentType.header
          },
          data: {
            text: 'Card Catalog',
            title: 'Header'
          }
        };
      case ComponentType.userInfo:
        return {
          meta: {
            type: ComponentType.userInfo
          },
          data: {
            userName: 'JohnDoe@hotmail.com',
            firstName: 'John',
            lastName: 'Doe',
            age: 27,
            title: 'User Info'
          }
        };
      case ComponentType.branding:
        return {
          meta: {
            type: ComponentType.branding
          },
          data: {
          }
        };
      case ComponentType.product:
        return {
          meta: {
            type: ComponentType.product
          },
          data: {
            products: [
              {
                title: 'Card Offer 1',
                imageSrc: 'card1.png'
              },
              {
                title: 'Card Offer 2',
                imageSrc: 'card2.png'
              },
              {
                title: 'Card Offer 3',
                imageSrc: 'card3.png'
              }
            ]
          }
        };
    }
  }
}
