import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/service/user/auth.service';
import { LoginComponent } from 'src/app/component/login/login.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { RegistroComponent } from 'src/app/component/registro/registro.component';
import { EstablecimientoComponent } from 'src/app/component/establecimiento/establecimiento.component';
import { ReservaComponent } from 'src/app/component/reserva/reserva.component';
import { CanchaComponent } from 'src/app/component/cancha/cancha.component'
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'establecimiento', component: EstablecimientoComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'canchas', component: CanchaComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
