import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  secondsToRedirect = 3;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

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
    this.authenticationService.logout();
    this.counter();
  }
}
