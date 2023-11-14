import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public selectedItem = new BehaviorSubject<string>('dry-food');

  selectItem(item: string): void {
    this.selectedItem.next(item);
  }
}
