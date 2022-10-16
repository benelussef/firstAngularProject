import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$:Observable<AppDataState<Product[]>>|null = null;
  readonly DataStateEnum = DataStateEnum;
  constructor(private productsService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllProduct() {
    this.products$ = this.productsService.getAllProduct().pipe(
      map((data)=>({dataState:DataStateEnum.LOADED,data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})),
    );
  }
  onGetSelectedProduct() {
    this.products$ = this.productsService.getSelectedProduct().pipe(
      map((data)=>({dataState:DataStateEnum.LOADED,data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})),
    );
  }
  onGetAvailableProduct() {
    this.products$ = this.productsService.getAvailableProduct().pipe(
      map((data)=>({dataState:DataStateEnum.LOADED,data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})),
    );
  }

  onSearchProduct(dataForm: any) {
    this.products$ = this.productsService.searchProduct(dataForm.keyword).pipe(
      map((data)=>({dataState:DataStateEnum.LOADED,data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message})),
    );
  }

  onSelect(p: Product) {
      this.productsService.SelectProduct(p)
        .subscribe(
        data=>{
          p.selected=data.selected;
        }
      )
  }

  onDelete(p: Product) {
    let v =confirm("Are you sure to delete "+p.name)
    if(v===true){
      this.productsService.DeleteProduct(p).subscribe(
        data=>{
          this.onGetAllProduct();
        }
      )
    };
  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }

  onEdit(p: Product) {
    this.router.navigateByUrl("/editProduct/"+p.id);
  }
}
