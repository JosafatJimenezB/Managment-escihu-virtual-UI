import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Classroom } from '../../classes/classroom.class';

@Component({
  selector: 'classroom-form',
  templateUrl: 'form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ClassroomFormComponent implements OnInit {

  @Input() classroomForm = new Classroom();

  @Output() classroom: EventEmitter<Classroom> = new EventEmitter<Classroom>();


  constructor() { }

  ngOnInit() { }

  emitForm(): void {
    this.classroom.emit(this.classroomForm);
  }
}
