import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AlertComponent} from "../../../../shared/components/alert/alert.component";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  standalone: true
})
export class ContactFormComponent implements OnInit {

  public isActive = false;
  public isSent = false;
  public contactForm!: FormGroup;

  constructor(private _snackBar: MatSnackBar,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.contactForm?.valid) {
      this._snackBar.openFromComponent(AlertComponent, {
        duration: 3000,
      });
      this.isSent = true;
    }
  }
}
