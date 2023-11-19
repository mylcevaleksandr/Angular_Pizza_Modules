import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {CoolInputDirective} from './directives/cool-input.directive';
import {ProductService} from "./services/product.service";
import {AboutComponent} from './components/pages/about/about.component';
import {MainComponent} from './components/pages/main/main.component';
import {OrderComponent} from './components/pages/order/order.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {ProductsModule} from "./components/products.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoolInputDirective,
    AboutComponent,
    MainComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
