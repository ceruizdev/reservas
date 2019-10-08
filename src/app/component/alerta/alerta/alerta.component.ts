import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  mensajes: Alerta[] = [];

  constructor() { }

  ngOnInit() {
  }

  add(mensaje: Alerta) {
    this.mensajes.push(mensaje);
  }

  close(alert: Alerta) {
    this.mensajes.splice(this.mensajes.indexOf(alert), 1);
  }

  clear() {
    this.mensajes = [];
  }

}
