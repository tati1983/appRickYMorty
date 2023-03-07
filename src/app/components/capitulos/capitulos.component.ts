import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { CapitulosService } from 'src/app/services/capitulos.service';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {

datosCapitulos: any;


  constructor(public _capitulos: CapitulosService) { }

  ngOnInit(): void {
    // this.datosPersonaje = this._capitulos.datosCapitulos;
    this.datosCapitulos = this._capitulos.getCapitulos();
  }

}
