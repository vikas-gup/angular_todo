import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  parentRouteId: number;	
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.parent.params.subscribe(params => {
        this.parentRouteId = +params["id"];
    });
    //this.router.routerState.parent(this.route)
    //  .params.subscribe(params => {
     //   this.parentRouteId = +params["id"];
    //  });
  }

}
