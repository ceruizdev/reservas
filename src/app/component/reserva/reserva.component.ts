import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Establecimiento } from 'src/app/model/establecimiento/establecimiento';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router, private _snackBar: MatSnackBar) { }
  establecimiento:Establecimiento;
  formUsr: FormGroup;

  ngOnInit() {   
    this.formUsr = new FormGroup({
      'nombres':new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
    if (history.state == null){
      this.router.navigateByUrl("/establecimiento");
    }else{
      this.establecimiento = new Establecimiento();
      this.establecimiento.cancha = history.state.cancha;
      this.establecimiento.horaApertura = history.state.horaApertura;  
      this.establecimiento.horaCierre = history.state.horaCierre;
      this.establecimiento.id = history.state.id;
      this.establecimiento.location = history.state.location;
      this.establecimiento.nombre = history.state.nombre;
      this.establecimiento.numeroCanchas =  history.state.numeroCanchas;
    }
  }
  generarReserva(){
      this._snackBar.open("Reserva ha sido generada", "Cerrar", {
        duration: 2000,
      });
  }
}

