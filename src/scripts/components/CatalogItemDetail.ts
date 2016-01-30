/**
 * A sample component that is responsible to display a single product detail.
 *
 * Created by owais zahid <owais.zahid@autodesk.com> on 10/30/2015.
 */
import {
    Component,
    View
} from "angular2/core";

import {
  FORM_DIRECTIVES // A list of all the form directives used as part of a @View annotation.
} from 'angular2/common'

import {
    Product
} from '../models/Product';

@Component({
    selector: 'catalog-item-detail',
    // Use inputs property to send data to the component.
    inputs: ['product']
})

@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="item-details">
            <div class="field">
                <label>Name:</label>
                <input type="text" [(ngModel)]="product.name">
            </div>
            <div class="field">
                <label>Description:</label>
                <input type="text" [(ngModel)]="product.description">
            </div>
            <div class="field">
                <label>Name:</label>
                <input type="text" [(ngModel)]="product.serialNumber">
            </div>
        </div>
    `
})

export class CatalogItemDetail {
    product: Product;
}
