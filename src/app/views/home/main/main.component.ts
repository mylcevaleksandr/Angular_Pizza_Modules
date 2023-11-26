import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {from, map, Observable, Subscription} from "rxjs";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
  lateData: Promise<string> | null = null
  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent
  // private promise: Promise<string>
  private observable: Observable<number>

  constructor(public cart: CartService) {
    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('hello')
    //   }, 2000)
    // })
    this.observable = from([1, 2, 3, 4])
    // this.observable = new Observable((observer) => {
    //   let count = 0
    //   const interval = setInterval(() => {
    //     observer.next(count++)
    //   }, 1000);
    //   const timeOut_1 = setTimeout(() => {
    //     observer.complete()
    //   }, 4000);
    //   const timeOut_2 = setTimeout(() => {
    //     observer.error('world')
    //   }, 5000);
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval)
    //       clearTimeout(timeOut_1)
    //       clearTimeout(timeOut_2)
    //     }
    //   }
    // })
  }

  private subscription: Subscription | null = null

  ngOnInit() {
    console.log(environment.production)
    this.subscription = this.observable

      .pipe(
        map((num) => {
          return num * 7
        })
      )

      .subscribe((param: number) => {
        console.log('subscriber 1 : ', param)
      })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.popupComponent.open()
    }, 2000)
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  test() {
    this.observable.subscribe({
      next: (param: number) => {
        console.log('subscriber 2: ', param)
      },
      error: (error: string) => {
        console.log('ERROR!!! ' + error)
      }
    })
  }
}
