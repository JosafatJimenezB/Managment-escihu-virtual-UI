import { Component, Inject, Input, OnInit } from '@angular/core';
import { ClassroomService } from '../../services/classroom.service';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { Classroom } from '../../classes/classroom.class';

@Component({
  selector: 'classroom-create-modal',
  templateUrl: 'create-modal.component.html'
})

export class ClassroomCreateModalComponent implements OnInit {

  @Input() title: string = '';

  @Input() icon: string = '';

  @Input() hint: string = '';

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly classroomService: ClassroomService,
    private readonly router: Router,
  ) { }

  ngOnInit() { }

  open = false;

  showDialog(): void  {
    this.open = true;
  }

  registerClassroom(classroom: Classroom): void {

    if( classroom.name == '' || classroom.description == '') {
      this.alerts
          .open('Todos los campos son requeridos', {
              label: 'Oh oh',
              status: 'warning',
              autoClose: true,
          })
          .subscribe();
      return;
    }


    this.classroomService.create(classroom).subscribe(
      (res) => {
        console.log(res)
        this.open = false;
        this.alerts
            .open('Salon con éxito', {
                status: 'success',
                autoClose: true,
            })
            .subscribe();
        this.router.navigate(['/salones']);
        window.location.reload();
      },
      (error) => {
        console.log(error)
        this.open = false;
        this.alerts
            .open('Error al crear el salon', {
                status: 'error',
                autoClose: true,
            })
            .subscribe();
      }
    )
  }
}
