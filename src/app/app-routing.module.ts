import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FmcComponent } from './COMPONENTS/fmc/fmc.component';
import { GatuhRunComponent } from './COMPONENTS/gatuh-run/gatuh-run.component';
import { InicioComponent } from './COMPONENTS/inicio/inicio.component';
import { LmmComponent } from './COMPONENTS/lmm/lmm.component';
import { MuseoComponent } from './COMPONENTS/museo/museo.component';
import { OtrosComponent } from './COMPONENTS/otros/otros.component';
import { PurucuComponent } from './COMPONENTS/purucu/purucu.component';

import { ValpoGameComponent } from './COMPONENTS/valpo-game/valpo-game.component';
import { FMCFINALComponent } from './COMPONENTS/fmc-final/fmc-final.component';
const routes: Routes = [
  {path:'', redirectTo: '/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'gatuhrun', component:GatuhRunComponent},
  {path:'purucu', component:PurucuComponent},
  {path:'lmm', component:LmmComponent},
  {path:'fmc', component:FmcComponent},
  {path:'museo', component:MuseoComponent},
  {path:'otros', component:OtrosComponent},

  {path:'valpo', component:ValpoGameComponent},
  {path:'fmc_final', component:FMCFINALComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

