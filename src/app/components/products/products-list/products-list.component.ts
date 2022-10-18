import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../state/product.state";
import {Product} from "../../../model/product.model";
import {EventDriverService} from "../../../services/event.driver.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsInput$:Observable<AppDataState<Product[]>>|null = null;
  readonly DataStateEnum = DataStateEnum;
  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
     //this.productEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
     this.eventDriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT,payload:p});
  }

  onDelete(p: Product) {
    //this.productEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCT,payload:p});

  }

  onEdit(p: Product) {
  //  this.productEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT,payload:p});

  }

  onActionEvent($event: ActionEvent) {
    //this.productEventEmitter.emit($event);
    this.eventDriverService.publishEvent($event);
  }
}
