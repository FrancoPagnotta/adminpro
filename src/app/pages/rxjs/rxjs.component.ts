import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs$ = new Observable((observer: Subscriber<unknown>) => {
      let i = 0;
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

    obs$.subscribe(
      resp => console.log(resp), // Esta primer funcion se ejecuta cuando el next emite un valor
      error => console.log(error), // Esta funcion se ejecuta cuando el error emite un valor. Cuando se emite el error, el complete no se va a ejecutar, corta en el error.
      () => console.log('obs ended') // Y esta funcion se ejecuta cuando el complete se ejecuta, que en este caso si lo implementamos en el obs de arriba.
    )
  }

}
