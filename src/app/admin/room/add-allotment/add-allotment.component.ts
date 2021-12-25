import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-add-allotment",
  templateUrl: "./add-allotment.component.html",
  styleUrls: ["./add-allotment.component.sass"],
})
export class AddAllotmentComponent {
  roomForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      name: ["", [Validators.required]],
      type: ["", [Validators.required]],
      description: ["", [Validators.required]],
     statut: ["", [Validators.required]],
    });
  }
  onSubmit() {
    console.log("Form Value", this.roomForm.value);
  }
}
