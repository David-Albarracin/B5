import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/models/carrera';

import {CarreraService} from "../../services/carrera.service";
import { NgForm } from "@angular/forms";




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

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this._carreraService.selectedCarrera = new Carrera();
    }
  }

  
  obtenerCarrera(){
    this._carreraService.getCarreras().subscribe({
      next: (data) => {
        this.carreraArr = data.result;
        //this.carreraArr=[data];
      },
      error: (error) => console.error(error)
    })
    
  }

  editCarrera(carrera: Carrera) {
    this._carreraService.selectedCarrera = carrera
  }




  addCarrera(form: NgForm) {
    if (form.value._id) {
      this._carreraService.putCarrera(form.value).subscribe((res) => {
        this.resetForm(form);
        this.obtenerCarrera();
      });
    } else {
      this._carreraService.postCarrera(form.value).subscribe((res) => {
        this.obtenerCarrera();
        this.resetForm(form);
      });
    }
  }







}
