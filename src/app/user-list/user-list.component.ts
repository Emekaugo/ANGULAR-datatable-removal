import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDeclineComponent } from '../user-decline/user-decline.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  pageTitle = 'Users';

  constructor(public dialog: MatDialog) {}

  openDeclineUserModal() {
    const dialogRef = this.dialog.open(UserDeclineComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {}
}
