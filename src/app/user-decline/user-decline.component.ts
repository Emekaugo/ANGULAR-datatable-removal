import { Component, Inject, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-user-decline',
  templateUrl: './user-decline.component.html',
  styleUrls: ['./user-decline.component.scss'],
})
export class UserDeclineComponent implements OnInit {
  usersDeclineForm!: FormGroup;
  public reason: string = '';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private personsService: PersonService
  ) {
    this.usersDeclineForm = this.formBuilder.group({
      reason: '',
    });
  }

  clickme() {
    this.submitted = true;
    if (this.usersDeclineForm.invalid) {
      return;
    }
    this.reason = this.usersDeclineForm.get('reason')?.value;
    console.log(
      ' As stated: ',
      // this.usersDeclineForm.get('reason'),
      this.reason.valueOf()
    );
  }

  ngOnInit(): void {}
}
