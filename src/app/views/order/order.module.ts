import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrderRoutingModule} from './order-routing.module';
import {OrderComponent} from "./order.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {TuiButtonModule, TuiRootModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule,
    OrderRoutingModule,
    InputTextModule,
    TuiRootModule,
    TuiButtonModule
  ],
  exports: [OrderRoutingModule]
})
export class OrderModule {
}
