import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../../state/product.state";
import {EventDriverService} from "../../../../services/event.driver.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:Product|null=null;
  @Output() productEventEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  constructor(
    private eventDriverService:EventDriverService
  ) { }

  ngOnInit(): void {
  }

  onSelect(p: any) {
      //this.productEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
      this.eventDriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
  }

  onDelete(p: any) {
   // this.productEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});

  }

  onEdit(p: any) {
    //this.productEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});

  }
}
