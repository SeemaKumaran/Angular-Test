/**
 * Created by 1014239 on 10/20/2016.
 */
import {Component} from 'angular2/core';


@Component({
  selector: 'reorder-items-list',
  template: `
            <div class="col-md-12">
              <table class="col-md-12">
                <thead>
                  <tr>
                  </tr>
                </thead>
                <tbody>
                  <tr  *ngFor= "#reorderItem of reorderItemsList">
                    <td class="col-md-3" style="width:200px" ><a href="#">
                        <img class="ezrow_image" src="http://www.staples-3p.com/s7/is/image/Staples/s0106527_sc7?$grid4$"></a>
                    </td>
                    <td class="col-md-2" id="reorderDescription" style="width:500px;"> {{reorderItem.description}}<br>
                        <div><span><img src="../images/stars.png" alt="stars" height="19px" width="79px"></span><span id="reviews">{{reorderItem.reviewText}}</span></div><br><br><br>
                        <div><span id="itemNumber">{{reorderItem.itemNumber}}</span><span id="itemModel">{{reorderItem.itemModel}}</span></div></td>
                    <td class="col-md-2" style="width:150px;"><span id="reorderPrice">{{reorderItem.price}}</span><br><span id="reorderEach">{{reorderItem.each}}</span></td>
                    <td class="col-md-1" style="width:100px">QTY. <input type="text" [(ngModel)]="reorderItem.qty" style="width:20px"></td>
                    <td class="col-md-4" style="width:350px"><button class="redBtn" (click)="OnClickAddToCart()">add to cart</button><br><div id="favoriteCtrl">ADD TO FAVORITES</div></td>
                  <hr>
                  </tr>
                  <hr>
                </tbody>
              </table>
            </div>
  `
})


export class ReorderItemsListComponent{
  public reorderItemsList = [
    {description:'Dell Inspiron 15.6-Inch Laptop', reviewText:'(129 reviews)', itemNumber:'Item 1075790 | ', itemModel: 'Model I3543-2000BLK', price:"$549.99", each:"each", qty:"1" },
    {description:'Dell Inspiron 15.6-Inch Laptop', reviewText:'(129 reviews)', itemNumber:'Item 1075790 | ', itemModel: 'Model I3543-2000BLK', price:"$549.99", each:"each", qty:"2" }
    ];

  OnClickAddToCart() {

  }

}
