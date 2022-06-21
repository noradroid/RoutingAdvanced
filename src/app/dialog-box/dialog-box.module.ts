import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { DialogBoxComponent } from "./dialog-box.component";

@NgModule({
    declarations: [DialogBoxComponent],
    imports: [
        FormsModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class DialogBoxModule {}