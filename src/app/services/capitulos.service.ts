import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapitulosService {

  datosCapitulos: any[] = [];

  urlsEpisodios: any[] = [
    {1 : 'https://uqload.co/embed-4z0u5crhw8nu.html'},
    {2 : 'https://uqload.co/embed-ial3tj2hz7tu.html'},
    {3 : 'https://uqload.co/embed-a8poc5yjemsn.html'},
    {4 : 'https://uqload.co/embed-r0charoaklzm.html'},
    {5 : 'https://uqload.co/embed-dt0iw2hbijlz.html'},
    {6 : 'https://uqload.co/embed-thmd5bixtan4.html'},
    {7 : 'https://uqload.co/embed-rfdrqhhb64ga.html'},
    {8 : 'https://uqload.co/embed-i9z2qzu135fx.html'},
    {9 : 'https://uqload.co/embed-byxnbv7dmna9.html'},
    {10 : 'https://uqload.co/embed-e56uvtn9x7ws.html'},
    {11 : 'https://uqload.co/embed-goba7s456lm4.html'},
    {12 : 'https://uqload.co/embed-8e7fc6h3e083.html'},
    {13 : 'https://uqload.co/embed-ldowbgrbr9nu.html'},
    {14 : 'https://uqload.co/embed-slg31lhuu61m.html'},
    {15 : 'https://uqload.co/embed-oicqyyyg2fgs.html'},
    {16 : 'https://uqload.co/embed-2oanxwy9014r.html'},
    {17 : 'https://uqload.co/embed-7jnygf6z14ah.html'},
    {18 : 'https://uqload.co/embed-5z7sx8lqhzmf.html'},
    {19 : 'https://uqload.co/embed-6kclvqkyeqb6.html'},
    {20 : 'https://uqload.co/embed-1vtgv0vfbsd5.html'},
    {21 : 'https://uqload.co/embed-4dz8ot2wix9w.html'},
    {22 : 'https://uqload.co/embed-ywrz85dzr7dj.html'},
    {23 : 'https://uqload.co/embed-pdltio6rlyuc.html'},
    {24 : 'https://uqload.co/embed-a41w03fcq16g.html'},
    {25 : 'https://uqload.co/embed-whbb4tzqxgxs.html'},
    {26 : 'https://uqload.co/embed-nusldukvgsmy.html'},
    {27 : 'https://uqload.co/embed-uniewr1day9f.html'},
    {28 : 'https://uqload.co/embed-v5kqyuka7iib.html'},
    {29 : 'https://uqload.co/embed-jj1hj8op7vyr.html'},
    {30 : 'https://uqload.co/embed-ohja3nevb6yn.html'},
    {31 : 'https://uqload.co/embed-7ppbkdqbaimd.html'},
    {32 : 'https://uqload.co/embed-ar00mww7dqok.html'},
    {33 : 'https://uqload.co/embed-2yef2vs3m34x.html'},
    {34 : 'https://uqload.co/embed-hmcsy673ankt.html'},
    {35 : 'https://uqload.co/embed-zlwxgknlx655.html'},
    {36 : 'https://uqload.co/embed-joga4mnjxm88.html'},
    {37 : 'https://uqload.co/embed-49v9r4z20llp.html'},
    {38 : 'https://uqload.co/embed-rigij1xya77k.html'},
    {39 : 'https://uqload.co/embed-o2tk60ltomt8.html'},
    {40 : 'https://uqload.co/embed-ywtscuymivmw.html'},
    {41 : 'https://uqload.co/embed-dzjaas69vrmp.html'},
    {42 : 'https://uqload.co/embed-zs9lhmxqf0l8.html'},
    {43 : 'https://uqload.co/embed-h38zciiv5wst.html'},
    {44 : 'https://uqload.co/embed-bt7zs9ollg78.html'},
    {45 : 'https://uqload.co/embed-oo3p4z1tglvo.html'},
    {46 : 'https://uqload.co/embed-poik4hi9hkfw.html'},
    {47 : 'https://uqload.co/embed-jp80whwunt60.html'},
    {48 : 'https://uqload.co/embed-cxn61676uwve.html'},
    {49 : 'https://uqload.co/embed-wjdbko6rld3a.html'},
    {50 : 'https://uqload.co/embed-ct34xjaf12vg.html'},
    {51 : 'https://uqload.co/embed-e1sc4o4u8ya6.html'}
  ];

  constructor(private httpClient: HttpClient) { }

  getCapitulos(): Array<any> {
    
    const idEpisodios = this.datosCapitulos.map(x => x.replace('https://rickandmortyapi.com/api/episode/', ''))
    return idEpisodios.map(x=>({
      numero : x , url: this.urlsEpisodios[x-1][x]
    }))
    
    // const URL = `https://rickandmortyapi.com/api/character?name=${personaje.episode}`
    // return this.httpClient.get(URL);
  }
}
