import { Component, Input } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, Router, RouterEvent } from '@angular/router';
import { Movie } from '../../../../movies.service';




@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  onhover:boolean = false;
  showLoading:boolean = false;
  clickButton:boolean = false;
  loader$!:any;
  ngOnInit():void {
    this.loader$ = this.router.events.subscribe(
      (routerEvent) => {
        this.checkRouterEvent(routerEvent as RouterEvent);
      }
    )
  }

  ngOnDestroy(): void {
    this.loader$.unsubscribe();
  }

  
  constructor(private router: Router) {
    
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof ResolveStart ) {
      this.showLoading = true;
    }

    if (routerEvent instanceof ResolveEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.showLoading = false;
    }
  }

}

