import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/models/carrera';

import {CarreraService} from "../../services/carrera.service";



@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})


export class CarrerasComponent implements OnInit {
  carreraArr: Carrera[] = [];

  constructor(private _carreraService: CarreraService ) { 
    
  }

  ngOnInit(): void {
    this.obtenerCarrera();

  }
  
  obtenerCarrera(){
    this._carreraService.getCarreras().subscribe({
      next: (data) => this.carreraArr=(data),
      error: (error) => console.error(error)
    })

  }

}
