 

import { Injectable } from '@angular/core';  
import { Subject } from 'rxjs';  
import { Teksti } from './teksti.model'; 

 
@Injectable() 
export class TekstiService { 
  tekstitChanged = new Subject<Teksti[]>(); 

  private tekstit: Teksti[] = []; 

  constructor() {} 


  setTekstit(tekstit: Teksti[]) { 
    this.tekstit = tekstit; 
    this.tekstitChanged.next(this.tekstit.slice()); 

  } 

  getTekstit() { 
    return this.tekstit.slice(); 
  } 

  getTeksti(index: number) { 
    return this.tekstit[index]; 
  } 

  addTeksti(teksti: Teksti) { 
    this.tekstit.push(teksti); 
    this.tekstitChanged.next(this.tekstit.slice()); 
  } 

  updateTeksti(index: number, newTeksti: Teksti) { 
    this.tekstit[index] = newTeksti; 
    this.tekstitChanged.next(this.tekstit.slice()); 
  } 

  deleteTeksti(index: number) { 
    this.tekstit.splice(index, 1); 
    this.tekstitChanged.next(this.tekstit.slice()); 
  } 
 

} 