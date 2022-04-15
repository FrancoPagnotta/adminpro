import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public title!: string;
  public subscription!: Subscription;

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute) { 
    this.subscription = this.getDataRoute();
   console.log(this.activatedRoute.snapshot.children)
  }
  
  ngOnInit(): void {
  }

  getDataRoute(): Subscription {
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map(value => value.snapshot.data)
    )
    .subscribe(({title}) => { //Como la respuesta de la suscripcion es un objeto, puedo desestructurarlo y manejar directamente la propiedad titulo del objeto.
      this.title = title;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
