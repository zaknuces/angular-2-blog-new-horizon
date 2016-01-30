/**
 * The main entry point to our angular application. Important things to note:
 * 1: Angular 2 is based on the idea of Components. Components are the new versions of Directives.
 *    (Directives also exists, more on it later.)
 * 2: Component has three parts:
 *      1: A Component Annotation (Annotation is a way of adding metadata to the code).
 *      2: A View Annotation
 *      3: A definition class
 *
 * Created by owais zahid <owais.zahid@autodesk.com> on 10/30/2015.
 *
 * This is a simple catalog management system. The main purpose to show how an application
 * can be developed using Angular component model.
 *
 * Other references and inspirations:
 * Victor Savkin's The Core Concepts of Angular 2 {@link http://victorsavkin.com/post/118372404541/the-core-concepts-of-angular-2}
 * Angular 2 documentation and Google group
 * draft ng-book2 by Ari Lerner, Felipe Coury, Nate Murray and Carlos Taborda
 *
 * Note: I am using annotations in a limited fashion to keep things simple.
 */
import {
    Component,
    View
} from "angular2/core";

import {
  NgFor  // Forget ng-repeat, we not have ng-for :)
} from 'angular2/common'

import {
  bootstrap
} from 'angular2/platform/browser'

// Import application specific classes and components
import {
    Product
} from './models/Product';

import {
    CatalogItem
} from './components/CatalogItem';

import {
    CatalogItemDetail
} from './components/CatalogItemDetail';

import {
    CatalogOptions
} from './components/CatalogOptions';


@Component({
    selector: 'my-app'  // Selector provides flexibility and the concept is similar to CSS selectors, XPath or JQuery selector. More on this in later tutorials.
})

// Use @View Annotation to indicate that the component has a view. Note: If we are using syntatic sugar then you can define template in the component annotation as well.
@View({
    // Unlike Angular 1, not every directive is available in the context. We need to declare the once we will be using in the template.
    directives: [CatalogItem, CatalogItemDetail, CatalogOptions, NgFor],
    template: `
        <div class='main-container'>
            <div class='list-view'>
                <catalog-item *ngFor="#product of products" [product]="product" (click)="productClicked($event)">
                </catalog-item>
            </div>
            <div class='detail-view'>
                <catalog-item-detail [product]="selectedItem"></catalog-item-detail>
            </div>
        </div>
        <div>
            <catalog-options (newCatalogItem)="newProduct()"></catalog-options>
        </div>
    `
})

// Class will provide the meaning to the component. The properties of the class can be used in the template. Class will be
// used to interact with other components and services.
class AppComponent {
    products: Array<Product>;
    selectedItem: Product;

    constructor() {
        this.products = [
            new Product(new Date('10 Nov, 2013'), 'Brake', 'Car Hydrolics Brake', 'good safely record', '1000'),
            new Product(new Date('10 Jun, 2014'), 'Chassis', 'Mclaren Chassis', 'strong support', '2010')
        ]

        this.selectedItem = this.products[0];
    }

    productClicked(product) {
        this.selectedItem = product;
    }

    newProduct() {
        this.products.push(this.selectedItem = new Product(new Date('10 Jun, 2014'), 'Feul Injector', 'Delphi FI', 'Multi-Port Fuel', '2010'))
    }
}

// Use this function to Bootstrap or Loading a new component at the root level of the application.
bootstrap(AppComponent);
