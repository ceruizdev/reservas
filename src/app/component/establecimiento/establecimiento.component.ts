import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { UserService } from 'src/app/service/user/user.service';
import { Usuario } from 'src/app/model/usuario/Usuario';
import { AlertaService } from 'src/app/service/alerta/alerta.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {
  items = [];
  constructor(private usuarioService:UserService) { 
    this.usuarioService.getRequest("https://us-central1-reservas-5f547.cloudfunctions.net/api").toPromise().then(data => {
      for(let cancha in data){
        if (data.hasOwnProperty(cancha)){
          this.items.push(data[cancha])
        }
      }
    });
  }

  ngOnInit() {
  }

}
