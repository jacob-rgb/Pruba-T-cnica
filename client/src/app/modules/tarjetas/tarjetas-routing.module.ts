import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicsCardDetailComponent } from './components/pages/graphics-card-detail/graphics-card-detail.component';
import { GraphicsCardListContainerComponent } from './components/pages/graphics-card-list-container/graphics-card-list-container.component';

const routes: Routes = [
  {path: '', component: GraphicsCardListContainerComponent},
  {path: ':id', component: GraphicsCardDetailComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetasRoutingModule { }
