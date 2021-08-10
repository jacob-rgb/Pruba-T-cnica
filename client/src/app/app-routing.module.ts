import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./modules/inicio/inicio.module').then( m => m.InicioModule ),
  },
  {
    path: 'graphics-cards',
    loadChildren: () => import('./modules/tarjetas/tarjetas.module').then( m => m.TarjetasModule ),
  },
  {
    path: '',
    redirectTo:'/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'/inicio',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
