import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userNameFormControl = new FormControl();
  passwordFormControl = new FormControl();

  loginForm = new FormGroup({
    username: this.userNameFormControl,
    password: this.passwordFormControl
  });

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  login() {
    const userName = this.userNameFormControl.value;
    const password = this.passwordFormControl.value;

    this.authenticationService.login(userName, password).subscribe((isLogged: boolean) => {
      if (!isLogged) {
        alert('Your account or password is incorrect, please try again.');
      }
      this.router.navigate(['/dashboard']);
    });
  }
}
