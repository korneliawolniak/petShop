import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class NotifcationService {

  constructor(private readonly _snackBar: MatSnackBar) {
  }

  public notifyComponent(component: ComponentType<unknown>): void {
    this._snackBar.openFromComponent(component, {
      duration: 3000,
    });
  }
}
