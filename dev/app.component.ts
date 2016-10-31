import {Component} from 'angular2/core';
import {ReorderItemsHeaderComponent} from './reorder-items-header.components';
import {ReorderItemsListComponent} from './reorder-items-list.component'

@Component({
    selector: 'my-app',
    template: `
          <head>
            <meta charset="utf-8">
            <title>
            </title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <div class="col-md-12">
          <reorder-items-header></reorder-items-header>
        <reorder-items-list></reorder-items-list>
        </div>
    `,
  directives: [ReorderItemsHeaderComponent, ReorderItemsListComponent]
})
export class AppComponent {

}
