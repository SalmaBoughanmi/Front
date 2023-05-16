import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerProfilComponent } from './creer-profil/creer-profil.component';
import { AjoutProfilComponent } from './ajout-profil/ajout-profil.component';


const routes: Routes = [
  {path:'',component:AjoutProfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreerProfilRoutingModule { }
