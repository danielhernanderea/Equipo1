import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { MovimientosI } from '../../modelos/listamovimientos.interface';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  movimientos: MovimientosI[];

  ngOnInit(): void {
    this.api.getMovimientosByUser("prueba@bbva.com").subscribe(data =>{
      console.log(data);
      this.movimientos = data;
    })
  }

}
