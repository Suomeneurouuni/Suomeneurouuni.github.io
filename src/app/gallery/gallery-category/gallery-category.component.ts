import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tuote } from 'src/app/shared/tuote.model';
import { Item } from '../gallery.model';

@Component({

  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.css']

})

export class GalleryCategoryComponent implements OnInit {

  item: Item;
  id: number;

  @Input() tuote: Tuote;
  @Input() index: number;

  constructor(private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {

  }


}




