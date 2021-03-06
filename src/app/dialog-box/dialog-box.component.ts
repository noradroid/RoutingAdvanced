import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<DialogBoxComponent>) {}

  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }
}
