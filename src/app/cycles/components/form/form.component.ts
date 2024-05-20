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
    this.cycle.emit(this.cycleForm);
  }
}
