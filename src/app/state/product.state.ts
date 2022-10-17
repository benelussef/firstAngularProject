export enum ProductActionsTypes{
  GET_ALL_PRODUCTS = "[product] Get All Products",
  GET_SELECTED_PRODUCTS = "[product] Get Selected Products",
  GET_AVAILABLE_PRODUCTS = "[product] Get Available Products",
  SEARCH_PRODUCTS = "[product] Search Products",
  NEW_PRODUCT = "[product] New Product",
  EDIT_PRODUCT = "[product] Edit Product",
  DELETE_PRODUCT = "[product] Delete Product",
  SELECT_PRODUCT = "[product] Select Product",
}
export interface ActionEvent{
  type:ProductActionsTypes,
  payload?:any
}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR,
}
export interface AppDataState<T>{
  dataState:DataStateEnum;
  data?:T;
  errorMessage?:string;
}
