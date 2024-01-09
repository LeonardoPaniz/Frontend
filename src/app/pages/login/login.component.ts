// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe(
        (response) => {
          // Autenticação bem-sucedida
          const token = response.token; // Supondo que sua API retorna um token
          this.authService.setToken(token);
          // Redireciona para a rota desejada (por exemplo, '/home')
          // Este redirecionamento depende da lógica do seu aplicativo
        },
        (error) => {
          // Trate erros de autenticação aqui
          console.error('Erro de autenticação:', error);
        }
      );
    }
  }
}
