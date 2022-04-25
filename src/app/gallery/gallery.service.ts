import { Injectable } from '@angular/core'; 
import { Subject } from 'rxjs'; 
import { Item } from './gallery.model'; 
import { Tuote } from '../shared/tuote.model';
import { Korjaus } from '../korjaukset/korjaus.model';
import { Palvelu } from '../muutpalvelut/muutpalvelut.model';
import { Remontti } from '../remontit/remontit.model';

@Injectable()
export class GalleryService {
  itemsChanged = new Subject<Item[]>();
  tuotteetChanged = new Subject<Tuote[]>();
  korjauksetChanged = new Subject<Korjaus[]>(); 
  palvelutChanged = new Subject<Palvelu[]>(); 
  remontitChanged = new Subject<Remontti[]>(); 



  private remontit: Remontti[] = []; 
  private korjaukset: Korjaus[] = []; 
  private palvelut: Palvelu[] = []; 
  private items: Item[] = [];
  private tuotteet : Tuote[] = [];

  constructor() {}


  setItems(items: Item[]) {
    this.items = items;
    this.itemsChanged.next(this.items.slice());
  }

  getItems() {
    return this.items.slice();
  }

  getItem(index: number) {
    return this.items[index];
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  updateItem(index: number, newItem: Item) {
    this.items[index] = newItem;
    this.itemsChanged.next(this.items.slice());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }

  getTuotteet() {
    return this.tuotteet.slice();
  }

  getTuote(index: number) {
    return this.tuotteet[index];
  }

  


  setKorjaukset(korjaukset: Korjaus[]) { 
    this.korjaukset = korjaukset; 
    this.korjauksetChanged.next(this.korjaukset.slice()); 

  } 

  getKorjaukset() { 
    return this.korjaukset.slice(); 
  } 

  getKorjaus(index: number) { 
    return this.korjaukset[index]; 
  } 

  addKorjaus(korjaus: Korjaus) { 
    this.korjaukset.push(korjaus); 
    this.korjauksetChanged.next(this.korjaukset.slice()); 
  } 

  updateKorjaus(index: number, newKorjaus: Korjaus) { 
    this.korjaukset[index] = newKorjaus; 
    this.korjauksetChanged.next(this.korjaukset.slice()); 
  } 

  deleteKorjaus(index: number) { 
    this.korjaukset.splice(index, 1); 
    this.korjauksetChanged.next(this.korjaukset.slice()); 
  } 




  setPalvelut(palvelut: Palvelu[]) { 
    this.palvelut = palvelut; 
    this.palvelutChanged.next(this.palvelut.slice()); 

  } 

  getPalvelut() { 
    return this.palvelut.slice(); 
  } 

  getPalvelu(index: number) { 
    return this.palvelut[index]; 
  } 

  addPalvelu(palvelu: Palvelu) { 
    this.palvelut.push(palvelu); 
    this.palvelutChanged.next(this.palvelut.slice()); 
  } 

  updatePalvelu(index: number, newPalvelu: Palvelu) { 
    this.palvelut[index] = newPalvelu; 
    this.palvelutChanged.next(this.palvelut.slice()); 
  } 

  deletePalvelu(index: number) { 
    this.palvelut.splice(index, 1); 
    this.palvelutChanged.next(this.palvelut.slice()); 
  } 



  
  setRemontit(remontit: Remontti[]) { 
    this.remontit = remontit; 
    this.remontitChanged.next(this.remontit.slice()); 

  } 

  getRemontit() { 
    return this.remontit.slice(); 
  } 

  getRemontti(index: number) { 
    return this.remontit[index]; 
  } 

  addRemontti(remontti: Remontti) { 
    this.remontit.push(remontti); 
    this.remontitChanged.next(this.remontit.slice()); 
  } 

  updateRemontti(index: number, newRemontti: Remontti) { 
    this.remontit[index] = newRemontti; 
    this.remontitChanged.next(this.remontit.slice()); 
  } 

  deleteRemontti(index: number) { 
    this.remontit.splice(index, 1); 
    this.remontitChanged.next(this.remontit.slice()); 
  } 



}
