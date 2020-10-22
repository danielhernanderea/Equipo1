import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovimientosI } from '../../modelos/listamovimientos.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getMovimientosByUser(user : string):Observable<MovimientosI[]>{
    let direccion = this.url + 'Movimientos/' + user;
    return this.http.get<MovimientosI[]>(direccion);
  }
}
