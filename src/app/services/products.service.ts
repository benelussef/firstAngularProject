import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({providedIn:"root"})
export class ProductsService{
   constructor(private http:HttpClient) {
   }
  getAllProduct():Observable<Product[]>{
     let host = environment.host
    return this.http.get<Product[]>(host+"/products");
  }
  getSelectedProduct():Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products?selected=true");
  }
  getAvailableProduct():Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products?available=true");
  }
  searchProduct(keyword:string):Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }
  SelectProduct(product:Product):Observable<Product>{
    let host = environment.host
    product.selected = !product.selected;
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }
  DeleteProduct(product:Product):Observable<void>{
    let host = environment.host
    return this.http.delete<void>(host+"/products/"+product.id);
  }
  SaveProduct(product:Product):Observable<Product>{
    let host = environment.host
    return this.http.post<Product>(host+"/products",product);
  }
  getProduct(id:number):Observable<Product>{
    let host = environment.host
    return this.http.get<Product>(host+"/products/"+id);
  }
  UpdateProduct(product:Product):Observable<Product>{
    let host = environment.host
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }
}
