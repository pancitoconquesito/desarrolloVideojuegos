import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FmcComponent } from './COMPONENTS/fmc/fmc.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { GaleriaImgComponent } from './COMPONENTS/galeria-img/galeria-img.component';
import { GaleriaGamesComponent } from './COMPONENTS/galeria-games/galeria-games.component';
import { GatuhRunComponent } from './COMPONENTS/gatuh-run/gatuh-run.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { InicioComponent } from './COMPONENTS/inicio/inicio.component';
import { LmmComponent } from './COMPONENTS/lmm/lmm.component';
import { MuseoComponent } from './COMPONENTS/museo/museo.component';
import { NavComponent } from './COMPONENTS/nav/nav.component';
import { OtrosComponent } from './COMPONENTS/otros/otros.component';
import { PurucuComponent } from './COMPONENTS/purucu/purucu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FMCFINALComponent } from './COMPONENTS/fmc-final/fmc-final.component';
import { ValpoGameComponent } from './COMPONENTS/valpo-game/valpo-game.component';

@NgModule({
  declarations: [
    AppComponent,
    FmcComponent,
    FooterComponent,
    GaleriaImgComponent,
    GaleriaGamesComponent,
    GatuhRunComponent,
    HeaderComponent,
    InicioComponent,
    LmmComponent,
    MuseoComponent,
    NavComponent,
    OtrosComponent,
    PurucuComponent,
    //ValpoComponent,
    //FmcFinalComponent,
    FMCFINALComponent,
    ValpoGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
