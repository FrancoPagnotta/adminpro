import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.returnObservable().pipe(
      retry(2)
    ).subscribe(
      resp => console.log(resp), // Esta primer funcion se ejecuta cuando se dispara el next.
      error => console.log(error), // Esta funcion se ejecuta cuando se dispara el error. Cuando se dispara el error, no se dispara el complete.
      () => console.log('obs ended') // Y esta funcion se ejecuta cuando se dispara el complete, que en este caso si lo implementamos en el obs de arriba.
    )
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

}
