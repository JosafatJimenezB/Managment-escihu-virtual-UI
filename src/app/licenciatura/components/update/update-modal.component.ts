import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { LicenciaturaService } from '../../services/licenciatura.service';
import { Licenciatura } from '../../classes/licenciatura.class';

@Component({
  selector: 'lic-update-modal',
  templateUrl: 'update-moda.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdateModalComponent implements OnInit {

  @Input() title: string = '';

  @Input() icon: string = '';

  @Input() hint: string = '';

  @Input() id: number = 0;

  Licenciatura: Licenciatura = new Licenciatura();

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly licenciaturaService: LicenciaturaService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.findById();
  }

  open = false;

  showDialog(): void  {
    this.open = true;
  }


  findById(): void {
    this.licenciaturaService.findById(this.id).subscribe(
      (res) => {
        this.Licenciatura = res;
      },
      (err) => {
        console.error(err);
      }
    );
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


    this.licenciaturaService.update(this.id, licenciatura).subscribe(
      (res) => {
        console.log(res)
        this.open = false;
        this.alerts
            .open('Licenciatura creada con éxito', {
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
