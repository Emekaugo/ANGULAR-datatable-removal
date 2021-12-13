import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { UserDeclineComponent } from '../user-decline/user-decline.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  usersDeclineForm!: FormGroup;
  subscription = new Subscription();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = [
    'nameOfCategory',
    'dateCreated',
    'status',
    'action',
  ];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  public columnsFilters = {};
  public dataSource: MatTableDataSource<Person>;
  private serviceSubscribe!: Subscription;

  constructor(
    private personsService: PersonService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Person>();
  }

  get formFields() {
    return this.usersDeclineForm.controls;
  }

  createForm() {
    return (this.usersDeclineForm = this.fb.group({
      nameOfCategory: ['', Validators.required],
      dateCreated: ['', Validators.required],
      status: ['', Validators.required],
      action: ['', Validators.required],
    }));
  }

  // edit(data: Person) {
  //   const dialogRef = this.dialog.open(UserDeclineComponent, {
  //     height: 'fit-content',
  //     // width: '',
  //     data: data,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.personsService.edit(result);
  //     }
  //   });
  // }

  delete(nameOfCategory: any) {
    const dialogRef = this.dialog.open(UserDeclineComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.personsService.remove(nameOfCategory);
        alert(nameOfCategory + ' has been removed');
        console.log(nameOfCategory + ' has been removed');
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.personsService.getAll();
    this.serviceSubscribe = this.personsService.persons$.subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }
}
