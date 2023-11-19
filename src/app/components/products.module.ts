import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from "./pages/products/products.component";
import {ProductComponent} from "./pages/product/product.component";
import {IsChickenDirective} from "../directives/is-chicken.directive";
import {ChickenDescriptionPipe} from "../pipes/chicken-description.pipe";
import {WordUpperPipe} from "../pipes/word-upper.pipe";
import {ChickenProductsPipe} from "../pipes/chicken-products.pipe";
import {ProductCardComponent} from "./common/product-card/product-card.component";
import {TitleComponent} from "./common/title/title.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    IsChickenDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    ChickenProductsPipe,
    TitleComponent,
    ProductCardComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule {
}
