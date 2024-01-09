// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'URL_DA_SUA_API'; // Substitua pela URL real da sua API
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Faça uma solicitação HTTP para autenticar o usuário na sua API
    // Aqui você deve implementar a lógica de autenticação real
    // Em um ambiente real, você nunca deve enviar senhas em texto simples
    // e usar HTTPS para proteger a comunicação.
    const body = { username, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  logout(): void {
    // Limpa o token ao fazer logout
    localStorage.removeItem(this.tokenKey);
  }

  setToken(token: string): void {
    // Armazena o token no armazenamento local
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    // Obtém o token do armazenamento local
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    // Verifica se o token está presente no armazenamento local
    return !!this.getToken();
  }
}
