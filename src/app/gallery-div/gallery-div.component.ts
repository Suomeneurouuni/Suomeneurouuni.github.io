
import { Component, OnInit } from '@angular/core'; 
import { DataStorageService } from '../shared/data-storage.service';
import { TekstiStorageService } from '../shared/teksti-storage.service'; 
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({ 

  selector: 'app-gallery-div', 
  templateUrl: './gallery-div.component.html', 
  styleUrls: ['./gallery-div.component.css'] 
})

export class GalleryDivComponent implements OnInit { 

  display = false;
  display1 = false;
  display2 = false;
  display3 = false;
  
  
  constructor(private dataStorageService: DataStorageService,
              public router: Router, 
              public route: ActivatedRoute,
              private tekstiStorageService: TekstiStorageService) { } 

  ngOnInit() { 
  
  } 

  onFetchData() { 
     this.tekstiStorageService.fetchTekstit().subscribe(); 
    this.dataStorageService.fetchItems().subscribe(); 
  } 

 
  onPress() {
    this.display = ! this.display;

    if (this.display = this.display) {
      this.router.navigate(['/gallery']);
    } else {
      this.router.navigate(['../'])
    }

    if(this.display1 = false,
      this.display2 = false,
      this.display3 = false) {
      this.display = true
     
  }

  }

  onPress1() {
    this.display1 = ! this.display1;

    if (this.display1 = this.display1) {
      this.router.navigate(['/korjaukset'])
    } else {
      this.router.navigate(['../'])
    }
    
    if(this.display = false,
      this.display2 = false,
      this.display3 = false) {
      this.display1 = true
      
  }

  }

  onPress2() {
    this.display2 = ! this.display2;

    if (this.display2 = this.display2) {
      this.router.navigate(['/remontit'])
    } else {
      this.router.navigate(['../'])
    }
    if(this.display = false,
      this.display1 = false,
      this.display3 = false) {
      this.display2 = true
      
  }

  }

  onPress3() {
    this.display3 = ! this.display3;

    if (this.display3 = this.display3) {
      this.router.navigate(['/muutpalvelut'])
    } else {
      this.router.navigate(['../'])
    }

    if(this.display = false,
      this.display1 = false,
      this.display2 = false) {
      this.display3 = true
      
  }

  }

} 

 
 

 
 