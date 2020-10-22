import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { OpmComponent } from './vistas/opm/opm.component';
import { MovimientosComponent } from './vistas/movimientos/movimientos.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent },
  {path:'registro', component:RegistroComponent },
  {path:'opm', component:OpmComponent },
  {path:'movimientos', component:MovimientosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponet = [LoginComponent, RegistroComponent, OpmComponent, MovimientosComponent]