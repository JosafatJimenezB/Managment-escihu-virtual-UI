import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cycle } from '../../classes/cycle.class';

@Component({
  selector: 'cycle-form',
  templateUrl: 'form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CycleFormComponent implements OnInit {

  @Input() cycleForm = new Cycle();

  @Output() cycle: EventEmitter<Cycle> = new EventEmitter<Cycle>();

  constructor() { }

  ngOnInit() { }

  emitForm(): void {
    // Verificamos que el nombre no esté vacío y que cumpla con las validaciones mínimas
    if (this.cycleForm.name && this.cycleForm.name.length >= 3) {
      this.cycle.emit(this.cycleForm);
    } else {
      console.warn('El formulario no es válido');
    }
  }
}

