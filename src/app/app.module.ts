import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegistroComponent } from './component/registro/registro.component';
import { HomeComponent } from './component/home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { AlertaComponent } from './component/alerta/alerta/alerta.component';
import { HeaderComponent } from './component/home/header/header.component';
import { MatToolbarModule,MatSidenavModule,MatListModule,MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MapsComponent } from './component/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { EstablecimientoComponent } from './component/establecimiento/establecimiento.component';
import { ReservaComponent } from './component/reserva/reserva.component';
import { CanchaComponent } from './component/cancha/cancha.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    AlertaComponent,
    HeaderComponent,
    MapsComponent,
    EstablecimientoComponent,
    ReservaComponent,
    CanchaComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8VP8twdaMHNgufKX2gNAZ00KRihgTCZg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
