import {Component} from '@angular/core';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  imports: [
    MatSnackBarModule
  ],
  standalone: true
})
export class AlertComponent {

}
