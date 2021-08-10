import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetasApiService {

  tarjetasArray: BehaviorSubject<any[]> = new BehaviorSubject([]);
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  devUrl: string = "http://localhost:3800/api/graphics-cards"; 

  constructor(private httpClient: HttpClient) {
    this.getTarjetas();
   }

   /* Función destinada a llamar a la api de 'tarjetas' para recoger su información y pasarsela al BehaviourSubject tarjetasArray */

   getTarjetas():void {
    this.loading.next(true);
     this.httpClient.get(this.devUrl).subscribe((data:any) => {
       this.tarjetasArray.next([...data.tarjetas]);
       this.loading.next(false);
     }, (error) => this.tarjetasArray.next([]));
  }
  

  /* Función destinada a llamar a la api de 'tarjetas' con un id para retornar un solo objeto
    params - id : id de la tarjeta gráfica
    Devuelve un observable
  */

  getTarjeta(id: string) {
     this.httpClient.get(`${this.devUrl}/${id}`).subscribe((data: any) => {
       this.tarjetasArray.next(data.tarjetas);
     })
  }

  /* Función destinada a llamar a la api de tarjetas filtrando por un termino y cambiar el contenido de tarjetasArray por el recibido
  params - term : término de busqueda
  */

  getTarjetasByWord(term: string):void {
    this.loading.next(true);
    if(!term) {
     return this.getTarjetas();
    }
    this.httpClient.get(`${this.devUrl}/termino/busqueda/${term}`).subscribe((data: any) => {
      this.tarjetasArray.next([...data.tarjetas]);
      this.loading.next(false);
    }, (error) => this.tarjetasArray.next([]));
  }
}
