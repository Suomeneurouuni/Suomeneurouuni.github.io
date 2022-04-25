import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Item } from '../gallery/gallery.model';
import { GalleryService } from '../gallery/gallery.service';
import { Korjaus } from '../korjaukset/korjaus.model';
import { Palvelu } from '../muutpalvelut/muutpalvelut.model';
import { Remontti } from '../remontit/remontit.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private galleryService: GalleryService) {}

  storeItems() {
    const items = this.galleryService.getItems();
    this.http
      .put(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/gallery.json',
        items
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchItems() {
    return this.http
      .get<Item[]>(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/gallery.json'
      )
      .pipe(
        map(items => {
          return items.map(item => {
            return {
              ...item,
              tuotteet: item.tuotteet ? item.tuotteet : [],
            };
          });
        }),
        tap(items => {
          this.galleryService.setItems(items);
        })
      )
  }

  
  storeKorjaukset() {
    const korjaukset = this.galleryService.getKorjaukset();
    this.http
      .put(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/korjaukset.json',
        korjaukset
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchKorjaukset() {
    return this.http
      .get<Korjaus[]>(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/korjaukset.json'
      )
      .pipe(
        map(korjaukset => {
          return korjaukset.map(korjaus => {
            return {
              ...korjaus,
   
            };
          });
        }),
        tap(korjaukset => {
          this.galleryService.setKorjaukset(korjaukset);
        })
      )
  }


  storePalvelut() {
    const palvelut = this.galleryService.getPalvelut();
    this.http
      .put(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/palvelut.json',
        palvelut
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchPalvelut() {
    return this.http
      .get<Palvelu[]>(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/palvelut.json'
      )
      .pipe(
        map(palvelut => {
          return palvelut.map(palvelu => {
            return {
              ...palvelu,
            };
          });
        }),
        tap(palvelut => {
          this.galleryService.setPalvelut(palvelut);
        })
      )
  }


  
  storeRemontit() {
    const remontit = this.galleryService.getRemontit();
    this.http
      .put(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/remontit.json',
        remontit
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRemontit() {
    return this.http
      .get<Remontti[]>(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/remontit.json'
      )
      .pipe(
        map(remontit => {
          return remontit.map(remontti => {
            return {
              ...remontti,
            };
          });
        }),
        tap(remontit => {
          this.galleryService.setRemontit(remontit);
        })
      )
  }




}

