import { Injectable } from '@angular/core';
import {AppointmentService} from '../appointment/viewappointment/appointment.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private appointment:AppointmentService) {
}}
