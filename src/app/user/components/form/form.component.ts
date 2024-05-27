import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateAttendance } from '../../classes/attendance.class';

@Component({
  selector: 'user-attendance-form',
  templateUrl: 'form.component.html'
})

export class UserAttendanceFormComponent implements OnInit {

  @Input() attendanceForm = new CreateAttendance();

  @Output() attendance: EventEmitter<CreateAttendance> = new EventEmitter<CreateAttendance>();

  items = ['ENTRADA', 'SALIDA']

  ngOnInit() { }

  emitForm(): void {
    this.attendance.emit(this.attendanceForm);
  }
}
