import { Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-patient",
  templateUrl: "./add-patient.component.html",
  styleUrls: ["./add-patient.component.sass"],
})
export class AddPatientComponent {
  patientForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      name: ["", [Validators.required]],
      lastname: ["",[Validators.required]],
      sexe: ["", [Validators.required]],
      number: [""],
      date_naissance: ["", [Validators.required]],
      age: [""],
      lieu_naissance:[""],
      quartier:[""],
      ville:[""],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      // maritalStatus: [""],
      adresse: [""],
      groupe_sanguin: [""],
      injury: [""],
      //uploadImg: [""],
    });
  };
 
  onSubmit() {
    console.log("Form Value", this.patientForm.value);
    
  }
}
