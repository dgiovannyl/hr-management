import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomSnackbarService {
  constructor() {}

  openSnackBar(snackBar: MatSnackBar, message: string, action: string) {
    snackBar.open(message, action, {
      duration: environment.snackBarDelay
    });
  }
}
