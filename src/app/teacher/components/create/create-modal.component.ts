import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../classes/teacher.class';

@Component({
  selector: 'teacher-create-modal',
  templateUrl: 'create-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TeacherCreateModalComponent implements OnInit {

  @Input() title: string = '';

  @Input() icon: string = '';

  @Input() hint: string = '';

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly teacherService: TeacherService,
    private readonly router: Router,
  ) { }

  ngOnInit() { }

  open: boolean = false;

  showDialog(): void  {
    this.open = true;
  }

  registerTeacher(teacher: Teacher): void {
    console.log(teacher)

    if(!teacher) {
      this.alerts
          .open('Todos los campos son requeridos', {
              label: 'Oh oh',
              status: 'warning',
              autoClose: true,
          })
          .subscribe();
      return;
    }

    this.teacherService.create(teacher).subscribe(
      (res) => {
        console.log(res)
        this.alerts
            .open(res.message, {
                label: '¡Éxito!',
                status: 'success',
                autoClose: true,
            })
            .subscribe();
            window.location.reload();
      },
      (error) => {
        console.log(error)
        this.alerts
            .open(error.message, {
                label: 'Oh oh',
                status: 'error',
                autoClose: true,
            })
            .subscribe();
      }
    )
  }
}
