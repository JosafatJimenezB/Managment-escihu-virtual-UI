import { Component, Inject, Input, OnInit } from '@angular/core';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { Cycle } from '../../classes/cycle.class';
import { CycleService } from '../../services/cycle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cycle-create-modal',
  templateUrl: 'create-modal.component.html'
})

export class CreateModalComponent implements OnInit {

  @Input() title: string = '';

  @Input() icon: string = '';

  @Input() hint: string = '';

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly cycleService: CycleService,
    private readonly router: Router,
  ) { }

  ngOnInit() { }

  open = false;

  showDialog(): void  {
    this.open = true;
  }

  registerCycle(cycle: Cycle): void {

    if(cycle.name == '' || cycle.name == null) {
      this.alerts
          .open('Todos los campos son requeridos', {
              label: 'Oh oh',
              status: 'warning',
              autoClose: true,
          })
          .subscribe();
      return;
    }

    this.cycleService.create(cycle).subscribe(
      (res) => {
        console.log(res)
        this.open = false;
        this.alerts
            .open('Ciclo creado con éxito', {
                status: 'success',
                autoClose: true,
            })
            .subscribe();
        this.router.navigate(['/ciclos-escolares']);
      },
      (error) => {
        console.log(error)
        this.open = false;
        this.alerts
            .open('Error al crear el ciclo', {
                status: 'error',
                autoClose: true,
            })
            .subscribe();
      }
    )

  }

}
