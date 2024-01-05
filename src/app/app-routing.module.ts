import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoments/home/home.component';
import { AboutComponent } from './compoments/about/about.component';
import { HeroesComponent } from './compoments/heroes/heroes.component';
import { HeroeComponent } from './compoments/heroe/heroe.component';
import { FilterComponent } from './compoments/filter/filter.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'heroes',component:HeroesComponent},
  {path:'heroe/:id',component:HeroeComponent},
  {path: 'filter/:id',component:FilterComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
