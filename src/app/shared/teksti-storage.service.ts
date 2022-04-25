import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { map, tap } from 'rxjs/operators'; 
import { Teksti } from '../gallery/teksti.model'; 
import { TekstiService } from '../gallery/teksti.service'; 


@Injectable({ providedIn: 'root' }) 
export class TekstiStorageService { 
  constructor(private http: HttpClient, private tekstiService: TekstiService) {} 

  storeTekstit() { 
    const tekstit = this.tekstiService.getTekstit(); 
    this.http 
      .put( 
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/texts.json', 
        tekstit 
      ) 
      .subscribe(response => { 
        console.log(response); 
      }); 
  } 


  fetchTekstit() {
    return this.http
      .get<Teksti[]>(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/texts.json'
      )
      .pipe(
        map(tekstit => {
          return tekstit.map(teksti => {
            return {
              ...teksti,
            
            };
          });
        }),
        tap(tekstit => {
          this.tekstiService.setTekstit(tekstit);
        })
      )
  }
} 

 
 
 