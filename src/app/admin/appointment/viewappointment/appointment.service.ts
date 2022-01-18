import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Appointment } from "./appointment.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { Doctors } from "../../doctors/alldoctors/doctors.model";


export interface numberOfAppointment{
  count:number;
}
@Injectable()
export class AppointmentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "http://backend.test:8080/api/";
  isTblLoading = true;

  dataChange: BehaviorSubject<Appointment[]> = new BehaviorSubject<
    Appointment[]
  >([]);
  dataChange1: BehaviorSubject<Doctors[]> = new BehaviorSubject<
  Doctors[]
>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Appointment[] {
    return this.dataChange.value;
  }
  get data_doctors():Doctors[]{
    return this.dataChange1.value;
  }
  getDialogData() {
    return this.dialogData;
  }

  // // Method read the doctors

  // getAllDoctors():void{
  //   this.subs.sink = this.httpClient.get<Doctors[]>(this.API_URL+'doctors').subscribe(
  //     (data_doctors) => {
  //       this.isTblLoading = false;
  //       this.dataChange1.next(data_doctors);
  //     },
  //     (error: HttpErrorResponse) => {
  //       this.isTblLoading = false;
  //       console.log(error.name + " " + error.message);
  //     }
  //   );
  // }
  /** CRUD METHODS */
  getAllAppointments(): void {
    this.subs.sink = this.httpClient.get<Appointment[]>(this.API_URL+'appointment').subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }

  getNumberAppointment(){
   return this.httpClient.get<numberOfAppointment>(this.API_URL+'numberOfAppointment');
  }
  addAppointment(appointment: Appointment): void {
    this.dialogData = appointment;

    /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
      this.dialogData = appointment;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateAppointment(appointment: Appointment): void {
    this.dialogData = appointment;

    /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
      this.dialogData = appointment;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteAppointment(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }

}
