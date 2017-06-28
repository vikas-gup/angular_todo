import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  private id;

  constructor(private route: ActivatedRoute) {}

  private ngOnInit() {
    this.route.params.subscribe(params => {
    	this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

}
