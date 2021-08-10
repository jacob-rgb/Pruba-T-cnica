import { Component, OnInit } from '@angular/core';
import { TarjetasApiService } from '../../services/tarjetas-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  terminoBusqueda: string

  constructor(private tarjetasApi: TarjetasApiService) { }

  ngOnInit(): void {
  }

  searchByWordord():void  {
    this.tarjetasApi.getTarjetasByWord(this.terminoBusqueda);
    this.terminoBusqueda = '';
  }

  verTodos():void {
    this.tarjetasApi.getTarjetas();
  }

}
