import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-card',
  templateUrl: './tarjeta-card.component.html',
  styleUrls: ['./tarjeta-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetaCardComponent implements OnInit {

  @Input() datosTarjeta = {};

  constructor() { }

  ngOnInit(): void {
    
  }

}
