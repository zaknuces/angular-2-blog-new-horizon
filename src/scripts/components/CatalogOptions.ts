/**
 * A sample component that is responsible to display catalog options.
 *
 * Created by owais zahid <owais.zahid@autodesk.com> on 1/30/2016.
 */
import {
    Component,
    View,
    EventEmitter
} from "angular2/core";

@Component({
    selector: 'catalog-options',
    // Use 'outputs' property to recieve data (in the form of events) from the component.
    outputs: ['newCatalogItem']
})

@View({
  template: `
        <div class="catalog-options">
            <button (click)="clicked()">Create New</button>
        </div>
    `
})

export class CatalogOptions {
  newCatalogItem: EventEmitter<any>;

  constructor() {
      this.newCatalogItem = new EventEmitter();
  }

  clicked() {
      this.newCatalogItem.emit(null);
  }
}
