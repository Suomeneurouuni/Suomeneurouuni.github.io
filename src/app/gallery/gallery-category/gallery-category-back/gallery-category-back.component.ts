import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router, } from '@angular/router';


@Component({ 

  selector: 'app-gallery-category-back', 
  templateUrl: './gallery-category-back.component.html', 
  styleUrls: ['./gallery-category-back.component.css'] 

}) 

export class GalleryCategoryBackComponent implements OnInit { 

  constructor( private route: ActivatedRoute,
              public router: Router   ) { } 


  ngOnInit(){ 

  } 

  onTakaisin() {  
    this.router.navigate(['../'], {relativeTo: this.route});  
  }  
 


  } 
 


 
 