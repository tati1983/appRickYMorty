import { Component, OnInit } from '@angular/core';
import { RickymortyService } from 'src/app/services/rickymorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _api: RickymortyService) { }

  ngOnInit(): void {
  }

  buscarPersonaje(personaje:any){
    console.log(personaje);
    this._api.getPersonaje(personaje).subscribe(personaje => {
      console.log(personaje);
    })
  }

}
