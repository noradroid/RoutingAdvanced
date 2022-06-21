import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  result = true;

  constructor(public dialog: MatDialog) {}

  confirm(message?: string): Observable<boolean> {
    // this.openDialog();
    // const confirmation = this.result;

    const confirmation = window.confirm(message || 'Are you sure?');

    return of(confirmation);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Within openDialog(): ${result}`)
      this.result = result;
    });
  }
}
