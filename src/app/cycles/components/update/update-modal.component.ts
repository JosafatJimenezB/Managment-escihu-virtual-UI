import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CycleService } from '../../services/cycle.service';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { Cycle } from '../../classes/cycle.class';

@Component({
  selector: 'cycle-update-modal',
  templateUrl: 'update-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdateModalComponent implements OnInit {

  @Input() title: string = '';

  @Input() icon: string = '';

  @Input() hint: string = '';

  @Input() id: number = 0;

  cycle: Cycle = new Cycle();

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly cycleService: CycleService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.getCicloById();
  }

  open = false;

  showDialog(): void  {
    this.open = true;
  }


  getCicloById(): void {
    this.cycleService.getById(this.id).subscribe(
      (res) => {
        this.cycle = res;
      },
      (error) => {
      }
    )
  }

  updateCycle(cycle: Cycle): void  {

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

    this.cycleService.updateById(this.id, cycle).subscribe(
      (res) => {
        console.log(res)
        this.open = false;
        this.alerts
            .open('Ciclo actualizado con éxito', {
                status: 'success',
                autoClose: true,
            })
            .subscribe();
        this.router.navigate(['/ciclos-escolares']);
        window.location.reload();
      },
      (error) => {
        console.log(error)
        this.open = false;
        this.alerts
            .open('Error al actualizar el ciclo', {
                status: 'error',
                autoClose: true,
            })
            .subscribe();
      }
    )

  }

}
