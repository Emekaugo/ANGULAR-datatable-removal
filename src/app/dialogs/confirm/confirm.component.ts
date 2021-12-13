import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  usersCommentForm!: FormGroup;
  display = false;
  inputsComments: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmComponent>
  ) {
    this.usersCommentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
  }

  acceptComment() {
    this.display = true;
    if (this.usersCommentForm.invalid) {
      return;
    } else {
      this.inputsComments = this.usersCommentForm.get('comment')?.value;
      console.log(' Dialog closed, Value is: ', this.inputsComments);
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {}
}
