import { Component, OnInit } from '@angular/core';
import { heroes, HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //listarherores:heroes[];

  constructor(private _heroesservice:HeroesService,private router:Router) { }


  buscarHeroe(params:string){
    this.router.navigate(['/filter',params]);
    console.log(params);
  }
  /*cargarheroes(){
    this.listarherores = this.servicio.getheroesnombre();
  }*/
  ngOnInit(): void {
  }

}
