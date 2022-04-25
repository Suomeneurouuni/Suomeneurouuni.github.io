import { Component, OnInit } from '@angular/core';
import { TekstiStorageService } from '../shared/teksti-storage.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private tekstiStorageService: TekstiStorageService,
             
              public router: Router,) { }

  ngOnInit() {
 
      this.tekstiStorageService.fetchTekstit().subscribe(); 

  
 

}
}
