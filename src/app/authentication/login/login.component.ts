import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { CustomSnackbarService } from 'src/app/shared/custom-snackbar/custom-snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userNameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    username: this.userNameFormControl,
    password: this.passwordFormControl
  });

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private customSnackbarService: CustomSnackbarService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  login() {
    const userName = this.userNameFormControl.value;
    const password = this.passwordFormControl.value;

    this.authenticationService.login(userName, password).subscribe((isLogged: boolean) => {
      if (!isLogged) {
        this.customSnackbarService.openSnackBar(
          this.snackBar,
          'Your account or password is incorrect, please try again.',
          ''
        );
      }
      this.router.navigate(['/dashboard']);
    });
  }
}
