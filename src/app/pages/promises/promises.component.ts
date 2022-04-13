import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => { // Este procedimiento es sincrono
      if ( 3 > 25) {
        resolve('Hello world');
      } else {
        reject('something wrong');
      }
    });

    promise.then((message) => { // En cambio este procedimiento y el del catch, es asincrono
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    })

    console.log('Init end');
  }

}
