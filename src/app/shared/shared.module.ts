import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CustomSnackbarService } from './custom-snackbar/custom-snackbar.service';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [CustomSnackbarService],
  entryComponents: [ConfirmationDialogComponent]
})
export class SharedModule {}
