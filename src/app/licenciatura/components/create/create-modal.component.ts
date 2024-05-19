import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { Licenciatura } from '../../classes/licenciatura.class';
import { LicenciaturaService } from '../../services/licenciatura.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lic-create-modal',
  templateUrl: 'create-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
    private readonly licenciaturaService: LicenciaturaService,
    private readonly router: Router,
  ) { }

  ngOnInit() { }

  open = false;

  showDialog(): void  {
    this.open = true;
  }

  registerLicenciatura(licenciatura: Licenciatura): void {


    if(licenciatura.name == '' || licenciatura.name == null) {
      this.alerts
          .open('Todos los campos son requeridos', {
              label: 'Oh oh',
              status: 'warning',
              autoClose: true,
          })
          .subscribe();
      return;

    }


    this.licenciaturaService.create(licenciatura).subscribe(
      (res) => {
        console.log(res)
        this.open = false;
        this.alerts
            .open('Licenciatura creada con éxito', {
                status: 'success',
                autoClose: true,
            })
            .subscribe();
        this.router.navigate(['/licenciaturas']);
      },
      (error) => {
        console.log(error)
        this.open = false;
        this.alerts
            .open('Error al crear la licenciatura', {
                label: 'Ups! algo salió mal',
                status: 'error',
                autoClose: true,
            })
            .subscribe();
      }
    );
  }

}
