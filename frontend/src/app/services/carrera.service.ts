import { Injectable } from '@angular/core';
import { Carrera } from 'src/app/models/carrera';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  selectedCarrera: Carrera = new Carrera();
  
  url = 'http://localhost:4000/buscar/';

  constructor(private http:HttpClient) {

   }
   

  getCarreras(): Observable<any> {
    return this.http.get(this.url);
  }
  
  putCarrera(carrera:Carrera) {
    return this.http.put('http://localhost:4000/actualizar/' + '${Carrera._id}' , carrera);
  }


  postCarrera(carrera:Carrera) {
    return this.http.post('http://localhost:4000/crear', carrera);
  }

  

  deleteCarrera(_id:String) {
    return this.http.delete('http://localhost:4000/eliminar/' + '${Carrera._id}');
  }




}
