/**
 * Created by 1014239 on 10/20/2016.
 */
import {Component} from 'angular2/core';

@Component({
  selector: 'reorder-items-header',
  template:`
      <div class="col-md-12">
        <label id="reOrderItemsLabel">Reorder Items: {{reorderItemNumber}}</label>
        <button class="grayBtn" style="margin-left:280px" (click)="onClickViewOrder()">VIEW ORDER</button>
        <button class="grayBtn" style="width:138px" (click)="onClickReturnItem()">RETURN AN ITEM</button> <br>
        <div>
          <span id="subHeadingLabel">Order date:</span>
          <span id="subHeadingValue">{{orderDate}}</span>
        </div>
        <div>
          <span id="subHeadingLabel">Total Order:</span>
          <span id="subHeadingValue">{{totalOrder}}</span>
        </div>
        <button class="redBtn" style="margin-left:760px" (click)="OnClickAddAllItemsToCart()">ADD ALL ITEMS TO CART</button>
        <hr>
      </div>
  `
})

export class ReorderItemsHeaderComponent{
  public reorderItemNumber = "9724464479";
  public orderDate = "06/06/15";
  public totalOrder = "$385.19";

  onClickViewOrder {

  }
  onClickReturnItem {

  }

  OnClickAddAllItemsToCart {

}
}
