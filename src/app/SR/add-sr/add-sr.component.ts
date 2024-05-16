import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-sr',
  templateUrl: './add-sr.component.html',
  styleUrls: ['./add-sr.component.css']
})
export class AddSrComponent {
  serviceBookingForm: FormGroup; // Rename registrationForm to serviceBookingForm

  showSuccessMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.serviceBookingForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      userType: ['', Validators.required],
      other: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.serviceBookingForm.valid) {
      // Perform data submission to the database
      // Reset the form
      this.serviceBookingForm.reset();
      // Display success message
      this.showSuccessMessage = true;
    }
  }
}
