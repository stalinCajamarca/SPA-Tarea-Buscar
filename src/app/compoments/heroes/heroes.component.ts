import { Component, OnInit } from '@angular/core';
import { HeroesService,heroes } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:heroes[]=[];
  constructor(private _heroesservice:HeroesService,private router:Router) { }

  verheroe(idx:number){
    console.log(idx)
    this.router.navigate(['/heroe',idx]);
  }

  ngOnInit(): void {
    this.heroes=this._heroesservice.getheroes()
    console.log(this.heroes);
  }

}
