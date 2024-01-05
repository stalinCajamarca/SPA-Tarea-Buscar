import { Component, OnInit } from '@angular/core';
import { heroes, HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  heroe:any={};
  constructor(private activatedroute:ActivatedRoute,private heroesservicio:HeroesService) {
    this.activatedroute.params.subscribe(params=>{
    this.heroe = heroesservicio.getheroesnombre(params['id'])
      console.log(this.heroe);
    })
   }

  ngOnInit(): void {
  }

}
