import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Licenciatura } from '../../classes/licenciatura.class';
import { tuiInputNumberOptionsProvider } from '@taiga-ui/kit';

@Component({
  selector: 'lic-form',
  templateUrl: 'form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiInputNumberOptionsProvider({decimal: 'never', step: 1})
  ],
})

export class LicenciaturaFormComponent implements OnInit {

  @Input() licenciaturaForm = new Licenciatura();

  @Output() licenciatura: EventEmitter<Licenciatura> = new EventEmitter<Licenciatura>();

  constructor() { }

  ngOnInit() { }

  emitForm(): void {
    this.licenciatura.emit(this.licenciaturaForm);
  }
}
