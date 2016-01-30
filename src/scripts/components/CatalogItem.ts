/**
 * A sample component that is responsible to display a single product in a catalog list.
 *
 * Created by owais zahid <owais.zahid@autodesk.com> on 10/30/2015.
 */
import {
    Component,
    View,
    EventEmitter
} from "angular2/core";

import {
    Product
} from '../models/Product';

@Component({
    selector: 'catalog-item',
    // Use 'inputs' property to send data to the component.
    inputs: ['product'],
    // Use 'outputs' property to recieve data (in the form of events) from the component.
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
    click: EventEmitter<any>;

    constructor() {
        this.click = new EventEmitter();
    }

    clicked() {
        this.click.next(this.product);
    }
}
