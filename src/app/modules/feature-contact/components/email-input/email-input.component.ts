import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {distinctUntilChanged, map} from "rxjs";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  standalone: true
})
export class EmailInputComponent implements OnChanges {
  public emailFormControl = new FormControl<string>('', [Validators.required, Validators.email]);
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isSent'] && changes['isSent'].currentValue === true) {
      this.emailFormControl.reset('');
    }
  }
}
