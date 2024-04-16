import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { Credentials } from "../../Interfaces/model";
import { NgForm } from "@angular/forms";
import { TuiAlertService } from "@taiga-ui/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "auth-login",
  templateUrl: "./login.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit{

  rememberMe: boolean = false;

  viewPassword: String = 'password'

  credentials: Credentials = new Credentials();

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
    private readonly authService: AuthService,
    private readonly router: Router,
  ){
  }

  ngOnInit(): void {
    const rememberMe = localStorage.getItem('rememberMe')
    if (rememberMe === 'true') {
      const storedCredentials = localStorage.getItem('credentials');
      if (storedCredentials) {
        this.credentials = JSON.parse(storedCredentials);
      }

      this.rememberMe = true;

      const rememberMe = localStorage.getItem('rememberMe');

      if(rememberMe === 'true'){
        let checkRemember = <HTMLInputElement> document.getElementById('remember-me');
        checkRemember.checked = true;
      }
    }
  }

  viewPasswordFunction(): void {
    this.viewPassword = this.viewPassword === 'password' ? 'text' : 'password';
  }

  login(form: NgForm): void {

    let formValues = form.form.value

    if (!formValues.username || !formValues.password) {
      this.alerts
            .open('Todos los campos deben estar completos', {
                label: 'Oh oh',
                status: 'warning',
                autoClose: true,
            })
            .subscribe();
      return;
    }

    this.authService.login(this.credentials).subscribe(
      (response) => {
        this.alerts
            .open('Inicio de sesión correcto', {
                label: 'Bienvenido',
                status: 'success',
                autoClose: true,
            })
            .subscribe();
            this.router.navigate(['/dashboard'])
      },
      (error) => {
        this.alerts
            .open('Existen problemas al iniciar sesión', {
                label: 'Error',
                status: 'error',
                autoClose: true,
            })
            .subscribe();
      }
    )

    this.setRememberMe(formValues)

  }

  setRememberMe(formValues: any): void {
    let checkRemember = <HTMLInputElement> document.getElementById('remember-me')

    if (!formValues.username || !formValues.password) {
      return;
    }

    let isChecked = checkRemember.checked;

    if (isChecked) {
      console.log('simon si entro')
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('credentials', JSON.stringify(this.credentials));
    } else {
      console.log('nel no entro')
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('credentials');
    }
  }


}
