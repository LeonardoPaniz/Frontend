import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../model/pedidos';
import { PedidosService } from '../services/pedidos.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  pedidos$: Observable<Pedidos[]>;
  displayedColumns = ['name', 'price', 'date', 'status'];

  constructor(
    public dialog: MatDialog,
    private pedidosService: PedidosService
  ) {

    this.pedidos$ = this.pedidosService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar pedidos.')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }
}
