import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NotifcationService} from "../../services/notifcation.service";
import {AlertComponent} from "../../../../shared/components/alert/alert.component";

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

  public contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder,
              private readonly notifcationService: NotifcationService) {
  }

  public ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.contactForm?.valid) {
      this.notifcationService.notifyComponent(AlertComponent);
    }
  }
}
