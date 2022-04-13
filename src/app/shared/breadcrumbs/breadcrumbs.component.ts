import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public title!: string;

  constructor(private router: Router) { 
    this.getDataRoute();
  }
  
  ngOnInit(): void {
  }

  getDataRoute() {
    this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map(value => value.snapshot.data)
    )
    .subscribe(({title}) => { //Como la respuesta de la suscripcion es un objeto, puedo desestructurarlo y manejar directamente la propiedad titulo del objeto.
      this.title = title;
    })
  }

}
