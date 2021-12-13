import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatDialogExampleComponent } from './mat-dialog-example/mat-dialog-example.component';
import { DialogService } from './services/dialog.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-scss2';

  animal!: string;
  namee!: string;

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    public dialog: MatDialog,
    private componentFactoryResolver: ComponentFactoryResolver,
    private dialogservice: DialogService
  ) {}

  // add(): void {
  //   // create the component factory
  //   const dynamicComponentFactory =
  //     this.componentFactoryResolver.resolveComponentFactory(ReuseableComponent);
  //   // add the component to the view
  //   const componentRef = this.container.createComponent(
  //     dynamicComponentFactory
  //   );
  // }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(MatDialogExampleComponent, {
  //     width: '250px',
  //     data: { name: this.namee, animal: this.animal },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  // openDialog(): void {
  //   this.dialog.confirmDialog();
  // }

  yesNoDialog() {
    this.dialogservice
      .confirmDialog({
        title: 'Are you sure?',
        message: 'Are you sure you want to do this?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
        inputsComments: '',
      })
      .subscribe((yes) => {
        if (yes) console.log('The user said YES');
      });
  }

  confirmCancelDialog() {
    this.dialogservice
      .confirmDialog({
        title: 'Confirm Action',
        message: 'DO YOU HAVE ANY COMMENTS?',
        confirmCaption: 'Confirm',
        cancelCaption: 'Cancel',
        inputsComments: '',
      })
      .subscribe((confirmed) => {
        if (confirmed) console.log('The user confirmed the action');
      });
  }
}
