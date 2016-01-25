/**
 * A sample component that is responsible to display a single product in a catalog list.
 *
 * Created by owais zahid <owais.zahid@autodesk.com> on 10/30/2015.
 */
import {
    Component,
    View,
    EventEmitter
} from "angular2/angular2";

import {
    Product
} from '../models/Product';

@Component({
    selector: 'catalog-item',
    // Having properties allows component to receive properties from DOM. Similar to Angular 1 directive scope variables.
    inputs: ['product'],
    outputs: ['click']
})
@View({
    template: `
        <div class="item" (click)="clicked()">
            <h3>{{ product.name}}</h3>
            <h4>Serial Number: {{ product.serialNumber}} | added: {{ product.entryDate}} </h4>
            <p>{{ product.description}}</p>
        </div>
    `
})

export class CatalogItem {
    product: Product;
    click: EventEmitter;

    constructor() {
        this.click = new EventEmitter();
    }

    clicked() {
        this.click.next(this.product);
    }
}