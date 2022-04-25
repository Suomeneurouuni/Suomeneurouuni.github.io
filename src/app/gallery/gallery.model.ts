import { Tuote } from "../shared/tuote.model";

export class Item { 
    name: string; 
    imagePath: string;
    tuotteet: Tuote[];

    constructor( name: string, imagePath: string, tuotteet: Tuote[]) { 
      this.name = name;
      this.imagePath= imagePath;
      this.tuotteet = tuotteet;
   
    } 

  } 

   
