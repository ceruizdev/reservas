import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from 'src/app/service/establecimiento/establecimiento.service';
import { AlertaService } from 'src/app/service/alerta/alerta.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  public initPoint: any = { lat: 4.615607, lng: -74.082397 }
  public marcador: any = [{ lat: 4.615607, lng: -74.082397 }]
  constructor(private establecimientoService: EstablecimientoService,
    private alertaService: AlertaService) { }

  ngOnInit() {
  }

  buscarCancha(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;
    this.establecimientoService.consultaEstablecimiento(lat, lng).subscribe(
      list => {
        this.marcador = [];
        this.marcador.push({ lat: lat, lng: lng, user: "Inicio" });
        if (list.length > 0) {
          for (var i = 0; i < list.length; i++) {
            this.marcador.push({
              lat: list[i].location.x, lng: list[i].location.y,
              name: list[i].nombre, id: list[i].id,
              ubicacion: list[i].ubicacion
            });
          }
        }else{
          this.alertaService.agregarMensaje("No hay establecimientos cerca", "info")
        }
      },
      err => {
        this.alertaService.agregarMensaje("Error consultando establecimientos " + err, "fatal")
      }
    );
  }

}
