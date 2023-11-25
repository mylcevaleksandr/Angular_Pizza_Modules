import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {AboutComponent} from "./about/about.component";
import {MainComponent} from "./main/main.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {TuiButtonModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    AboutComponent,
    MainComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    NgbModalModule,
    TuiButtonModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule {
}
