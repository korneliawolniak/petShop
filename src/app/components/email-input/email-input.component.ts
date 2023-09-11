import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {distinctUntilChanged, map} from "rxjs";

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnChanges {
  emailFormControl = new FormControl<string>('', [Validators.required, Validators.email]);
  @Input() isSent?: boolean;
  @Output() emailValidityChange = new EventEmitter<boolean>();

  constructor() {
    this.emailFormControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        map(() => this.emailFormControl.valid)
      )
      .subscribe((isValid) => {
        this.emailValidityChange.emit(isValid);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isSent'] && changes['isSent'].currentValue === true) {
      this.emailFormControl.reset('');
    }
  }
}
