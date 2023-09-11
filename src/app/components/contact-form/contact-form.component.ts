import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AlertComponent} from "../alert/alert.component";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  public isActive = false;
  public isSent = false;

  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar() {
    this._snackBar.openFromComponent(AlertComponent, {
      duration: 3000,
    });
    this.isSent = true;
  }

  handleValidEmailEntered(valid: boolean) {
    this.isActive = valid;
  }
}
