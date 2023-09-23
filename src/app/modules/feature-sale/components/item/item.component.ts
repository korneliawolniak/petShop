import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  imports: [
    MatCardModule
  ],
  standalone: true
})
export class ItemComponent {

}
