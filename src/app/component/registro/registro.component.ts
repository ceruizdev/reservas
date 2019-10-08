import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  maxNacimiento;
  constructor() { }

  ngOnInit() {
    this.maxNacimiento = new Date();
    this.maxNacimiento.setFullYear( this.maxNacimiento.getFullYear() - 14 )
  }

}
