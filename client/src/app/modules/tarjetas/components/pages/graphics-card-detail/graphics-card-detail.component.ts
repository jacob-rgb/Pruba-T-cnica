import { ChangeDetectionStrategy, ChangeDetectorRef ,Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetasApiService } from '../../../services/tarjetas-api.service';

@Component({
  selector: 'app-graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  styleUrls: ['./graphics-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardDetailComponent implements OnInit {
  datosTarjeta: any;
  idParam: string;
  loading: boolean = true;
 

  constructor(private tarjetasApi: TarjetasApiService,
              private aRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    this.idParam = this.aRoute.snapshot.params['id'];
    this.tarjetasApi.tarjetasArray.subscribe((data) => {
      this.datosTarjeta =  data.filter( tarjeta => tarjeta._id === this.idParam)[0]; 
      this.loading = false;
      this.cdr.detectChanges();
    })
  }

  ngOnDestroy():void {
    this.tarjetasApi.tarjetasArray.unsubscribe();
  }

}
