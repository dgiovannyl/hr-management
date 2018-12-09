import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  secondsToRedirect: number;

  constructor(private router: Router) {
    this.secondsToRedirect = 3;
  }

  counter() {
    setTimeout(() => {
      if (this.secondsToRedirect <= 0) {
        this.router.navigate(['/login']);
      } else {
        this.secondsToRedirect--;
        this.counter();
      }
    }, 1000);
  }

  ngOnInit() {
    this.counter();
  }
}
