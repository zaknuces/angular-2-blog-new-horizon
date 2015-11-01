/**
 * The main entry point to our angular application. Important things to note:
 * 1: Angular 2 is based on the idea of Components. Components are the new versions of Directives.
 * 2: Component has three parts:
 *      1: A Component Annotation (Annotation is a way of adding metadata to the code).
 *      2: A View Annotation
 *      3: A definition class
 *
 * Created by owais zahid <owais.zahid@autodesk.com> on 10/30/2015.
 *
 * This application is mainly based on
 * - angular 5 mins quick start <@link https://angular.io/docs/ts/latest/quickstart.html>
 *
 * Other references and inspirations:
 * Angular Documentation and Code.
 */
import {
    Component,
    View,
    bootstrap
} from "angular2/angular2";

@Component({
    selector: 'my-app'  // Selector provides flexibility and the concept is similar to CSS selectors, XPath or JQuery selector. More on this in later tutorials.
})

// Use @View Annotation to indicate that the component has a view. Note: If we are using syntatic sugar then you can define template in the component annotation as well.
@View({
    template: `
        <div class='main-container'>
            This is the beginning!
        </div>
    `
})

// Class will provide the meaning to the component. The properties of the class can be used in the template. Class will be
// used to interact with other components and services.
class AppComponent {}

// Use this function to Bootstrap or Loading a new component at the root level of the application.
bootstrap(AppComponent);
