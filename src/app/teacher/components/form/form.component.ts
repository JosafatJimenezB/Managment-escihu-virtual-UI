import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Teacher } from '../../classes/teacher.class';
import { tuiInputDateOptionsProvider } from '@taiga-ui/kit';

@Component({
  selector: 'teacher-form',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TeacherFormComponent implements OnInit, OnDestroy {

  @Input() teacherForm = new Teacher();

  @Output() teacher: EventEmitter<Teacher> = new EventEmitter<Teacher>();

  sexoItems = ['MASCULINO', 'FEMENINO']
  estadoCivilItems = ['SOLTERO', 'CASADO', 'DIVORCIADO', 'VIUDO']
  statusTeacherItems = ['ACTIVO', 'INACTIVO']

  errorMessage: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.teacherForm.fechaNacimiento = new Date();
  }

  ngOnDestroy(): void {
    this.teacherForm = new Teacher();
  }

  emitForm(): void {
    let formatDate = new Date(this.teacherForm.fechaNacimiento).toISOString();
    this.teacherForm.fechaNacimiento = formatDate;
    this.teacher.emit(this.teacherForm);
  }

  validateCurp() {
    if (this.teacherForm.curp.length > 18) {
      this.errorMessage = 'El CURP no puede tener más de 18 caracteres';
    } else {
      this.errorMessage = null;
    }
  }
}
