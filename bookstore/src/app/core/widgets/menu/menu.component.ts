import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ResolveEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {RouteMapService} from '../../services/route-map.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,
              public routeMap: RouteMapService) {
  }

  ngOnInit() {
    this.router.events
      // .do(x => console.log(x))
      .filter(event => event instanceof ResolveEnd)
      .map((event: ResolveEnd) => event.state.root.data)
      .subscribe(x => console.log(x));
  }

}
