import { formatDate } from "@angular/common";
export class Appointment {
  id: number;
  personnel_id:number;
  personnel_name:string;
  patient_id:number;
  patient_name:string;
  personnel_specialisation:string;
  type:string;

  constructor(appointment) {
    {
      this.id = appointment.id || this.getRandomID();
      this.personnel_name= appointment.personnel_name || "";
      this.personnel_specialisation = appointment.personnel_specialisation || "";
      this.personnel_id = appointment.personnel_id || "";
      this.patient_id = appointment.patient_id || "";
      // this.date = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.patient_name = appointment.patient_name || "";
      this.type=appointment.type || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
