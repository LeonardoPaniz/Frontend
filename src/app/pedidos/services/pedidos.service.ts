import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedidos } from '../model/pedidos';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private readonly API = 'api/pedidos';

  constructor(private HttpClient: HttpClient) { }

  list() {
    return this.HttpClient.get<Pedidos[]>(this.API).pipe(
      first(),
      tap(pedidos => console.log(pedidos))
    );
  }
}
