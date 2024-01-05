import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Rutas//
import { AppRoutingModule } from './app-routing.module';
//Componente//
import { AppComponent } from './app.component';
import { NavbarComponent } from './compoments/shared/navbar/navbar.component';
import { HomeComponent } from './compoments/home/home.component';
import { AboutComponent } from './compoments/about/about.component';
import { HeroesComponent } from './compoments/heroes/heroes.component';
//servicio//
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './compoments/heroe/heroe.component';
import { FilterComponent } from './compoments/filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
