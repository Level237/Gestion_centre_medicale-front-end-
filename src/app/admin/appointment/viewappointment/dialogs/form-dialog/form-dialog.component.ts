import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { AppointmentService } from "../../appointment.service";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Appointment } from "../../appointment.model";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  appointmentForm: FormGroup;
  appointment: Appointment;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appointmentService: AppointmentService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      console.log(data.appointment.date);
      this.dialogTitle = data.appointment.name;
      this.appointment = data.appointment;
    } else {
      this.dialogTitle = "New Appointment";
      this.appointment = new Appointment({});
    }
    this.appointmentForm = this.createContactForm();
  }
  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  createContactForm(): FormGroup {
    return this.fb.group({

      personnel_id: [this.appointment.personnel_id, [Validators.required]],
      personnel_name: [this.appointment.personnel_name, [Validators.required]],
      patient_id: [this.appointment.patient_id, [Validators.required]],
      // date: [
      //   formatDate(this.appointment.date, "yyyy-MM-dd", "en"),
      //   [Validators.required],
      // ],
      patient_name: [this.appointment.patient_name, [Validators.required]],
      personnel_specialisation: [this.appointment.personnel_specialisation, [Validators.required]],
      type:[this.appointment.type, [Validators.required]],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.appointmentService.addAppointment(this.appointmentForm.getRawValue());
  }
}
