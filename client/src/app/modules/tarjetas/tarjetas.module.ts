import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GraphicsCardDetailComponent } from './components/pages/graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardListContainerComponent } from './components/pages/graphics-card-list-container/graphics-card-list-container.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TarjetaCardComponent } from './components/tarjeta-card/tarjeta-card.component';
import { TarjetasRoutingModule } from './tarjetas-routing.module';
import { LoadingComponent } from '../../components/shared/loading/loading.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [GraphicsCardListContainerComponent, GraphicsCardDetailComponent, TarjetaCardComponent, SearchBarComponent, LoadingComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    TarjetasRoutingModule,
  ]
})
export class TarjetasModule { }
