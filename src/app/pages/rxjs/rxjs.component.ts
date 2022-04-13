import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.returnObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   resp => console.log(resp), // Esta primer funcion se ejecuta cuando se dispara el next.
    //   error => console.log(error), // Esta funcion se ejecuta cuando se dispara el error. Cuando se dispara el error, no se dispara el complete.
    //   () => console.log('obs ended') // Y esta funcion se ejecuta cuando se dispara el complete, que en este caso si lo implementamos en el obs de arriba.
    // )
    this.subscription = this.returnInterval()
      .subscribe(resp => console.log(resp));
  }

  returnInterval(): Observable<number> {
    return interval(200)
      .pipe(
        // take(10),
        map(value => value + 1),
        filter(value => (value % 2 === 0) ? true : false)
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    
    return new Observable<number>((observer: Subscriber<unknown>) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i)
        
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('I is equal to 2');
        }
      }, 1000)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
