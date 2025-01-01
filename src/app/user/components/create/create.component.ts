import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { CreateAttendance } from '../../classes/attendance.class';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'user-attendance-create-modal',
  templateUrl: 'create.component.html'
})

export class UserAttendanceCreateModalComponent implements OnInit {

  @Input() title: string = '';

  @Input() icon: string = '';

  @Input() hint: string = '';

  private attendanceService = inject(AttendanceService);

  private route = inject(ActivatedRoute);

  userId: number = this.route.snapshot.params['userId'];

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly router: Router,
  ) { }

  ngOnInit() { }

  open = false;

  showDialog(): void  {
    this.open = true;
  }

  registerAttendance(attendance: CreateAttendance): void {

    attendance.userId = this.userId;

    if( !attendance.userId || !attendance.typeAttendace ) {
      this.alerts
          .open('Todos los campos son requeridos', {
              label: 'Oh oh',
              status: 'warning',
              autoClose: true,
          })
          .subscribe();
      return;
    }

    this.attendanceService.create(attendance).subscribe(
      (res) => {
        console.log(res)
        this.open = false;
        this.alerts
            .open('Asistencia registrada con éxito', {
                status: 'success',
                autoClose: true,
            })
            .subscribe();
            window.location.reload();
      },
      (error) => {
        this.alerts
            .open('Error al registrar la asistencia', {
                label: 'Oh oh',
                status: 'error',
                autoClose: true,
            })
            .subscribe();
      }
    )

  }
}
