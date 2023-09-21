import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AlertComponent} from "../../../../shared/components/alert/alert.component";
import {EmailInputComponent} from "../email-input/email-input.component";
import {MessageInputComponent} from "../message-input/message-input.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [
    EmailInputComponent,
    MessageInputComponent,
    MatButtonModule,
  ],
  standalone: true
})
export class ContactFormComponent {

  public isActive = false;
  public isSent = false;

  constructor(private _snackBar: MatSnackBar) {
  }

  public openSnackBar(): void {
    this._snackBar.openFromComponent(AlertComponent, {
      duration: 3000,
    });
    this.isSent = true;
  }

  public handleValidEmailEntered(valid: boolean): void {
    this.isActive = valid;
  }
}
