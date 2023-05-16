import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemOffreComponent } from './ajout-dem-offre/ajout-dem-offre.component';

const routes: Routes = [
  {path:':id',component:AjoutDemOffreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutDemOffreRoutingModule { }
