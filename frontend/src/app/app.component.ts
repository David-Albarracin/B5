import { Component } from '@angular/core';
import { Carrera } from './models/carrera';
import {Empleado} from "./models/empleado";

import {CarreraService} from "./services/carrera.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pryb5';
  /*
  empleadoArr:Empleado[]=[
    {id:1, nombre:"Juan Díaz", cargo:"Operario", experiencia:2},
    {id:2, nombre:"Luz Pérez", cargo:"Operario", experiencia:3},
    {id:3, nombre:"Carlos Paz", cargo:"Administrador", experiencia:5},
    {id:4, nombre:"María Dominguez", cargo:"Gerente", experiencia:5}
  ];*/


  /*
    selectedEmp: Empleado = new Empleado();
    
    editar(emp:Empleado){
      this.selectedEmp=emp;
    }  

    editarGuardar() {
      if (this.selectedEmp.id == 0) {
         this.selectedEmp.id = this.empleadoArr.length + 1;
          this.empleadoArr.push(this.selectedEmp);
      }
      this.selectedEmp = new Empleado();
    }

    borrar() {
      if(confirm ("Seguro de querer eliminar?")){
        this.empleadoArr = this.empleadoArr.filter(x=> x != this.selectedEmp);
        this.selectedEmp = new Empleado;
      }*/

  }


