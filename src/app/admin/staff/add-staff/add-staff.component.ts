import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-add-staff",
  templateUrl: "./add-staff.component.html",
  styleUrls: ["./add-staff.component.sass"],
})
export class AddStaffComponent {
  staffForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder) {
    this.staffForm = this.fb.group({
      nom: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
     role: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      lieu_naissance: ["",[Validators.required]],
      situation_matrimoniale: ["",[Validators.required]],
      date_naissance: ["",[Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      nombre_enfant: [""],
      specialisation: [""],
    });
  }
  onSubmit() {
    console.log("Form Value", this.staffForm.value);
  }
}
