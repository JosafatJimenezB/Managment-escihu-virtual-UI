import { Component, Inject, Input, OnInit } from '@angular/core';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { ClassroomService } from '../../services/classroom.service';
import { Router } from '@angular/router';
import { Classroom } from '../../classes/classroom.class';

@Component({
  selector: 'classroom-update-modal',
  templateUrl: 'update-modal.component.html'
})

export class ClassroomUpdateModalComponent implements OnInit {
  @Input() title: string = '';

  @Input() icon: string = '';

  @Input() hint: string = '';

  @Input() id: number = 0;

  classroom: Classroom = new Classroom();

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly classroomService: ClassroomService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.getClassroom();
  }

  open = false;

  showDialog(): void  {
    this.open = true;
  }

  getClassroom(): void {
    this.classroomService.getById(this.id).subscribe(
      (res) => {
        this.classroom = res;
      },
      (error) => {
      }
    )
  }

  updateClassroom(classroom: Classroom): void {

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


    this.classroomService.updateById(this.id, classroom).subscribe(
      (res) => {
        this.open = false;
        this.router.navigate(['/salones']);
        window.location.reload();
        this.alerts
            .open('Salon actualizado con éxito', {
                status: 'success',
                autoClose: true,
            })
            .subscribe();
            window.location.reload();
      },
      (error) => {
        console.log(error)
        this.open = false;
        this.alerts
            .open('Error al actualizar el salon', {
                status: 'error',
                autoClose: true,
            })
            .subscribe();
      }
    )
  }
}
