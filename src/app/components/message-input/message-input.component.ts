import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnChanges {
  @Input() isSent?: boolean;
  public message = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isSent'] && changes['isSent'].currentValue === true) {
      this.message = '';
    }
  }
}
