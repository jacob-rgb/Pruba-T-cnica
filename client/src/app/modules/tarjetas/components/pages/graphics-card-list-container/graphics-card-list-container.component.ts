import { ChangeDetectionStrategy , Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TarjetasApiService } from '../../../services/tarjetas-api.service';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardListContainerComponent implements OnInit {

  p: number = 1;
  tarjetas: BehaviorSubject<any[]> ;
  loading: BehaviorSubject<boolean>;
  

  constructor(private tarjetasApi: TarjetasApiService) { }

  ngOnInit(): void {
    this.tarjetasApi.getTarjetas();
    this.tarjetas = this.tarjetasApi.tarjetasArray;
    this.loading = this.tarjetasApi.loading;
  }

  changebyword(term)  {
    this.tarjetasApi.getTarjetasByWord(term);
  }

  // Valida si tarjetas es mayor a 0

  tarjetasValidator() {
    return this.tarjetas.getValue().length === 0 ? true : false;
  }

}
