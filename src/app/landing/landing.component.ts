import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

export interface DialogData{
  dialog: string,
  name: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

  animal: string;
  name: string;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    console.log("navigating to login");
    this.router.navigate(['/login']);
  }

}
