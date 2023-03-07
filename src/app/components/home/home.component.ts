import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RickymortyService } from 'src/app/services/rickymorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _api: RickymortyService) { }

  datosPersonaje: any[] = [];

  ngOnInit(): void {
  }

  buscarPersonaje(personaje:any){
    this._api.getPersonaje(personaje).subscribe(personaje => {
      console.log(personaje);
      this.datosPersonaje = personaje.results;
    })
  }

}
