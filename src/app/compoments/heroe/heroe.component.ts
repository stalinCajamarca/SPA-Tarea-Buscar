import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any={};
  constructor(private activatedroute:ActivatedRoute,private heroesservicio:HeroesService) {
    this.activatedroute.params.subscribe(params=>{
    this.heroe = heroesservicio.getheroe(params['id'])
      console.log(this.heroe);
    })
   }

  ngOnInit(): void {
  }

}
