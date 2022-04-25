import { Component, OnInit, Input } from '@angular/core';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formbtn',
  templateUrl: './formbtn.component.html',
  styleUrls: ['./formbtn.component.css']
})
export class FormbtnComponent {

  @Input() showButton: boolean;
  faHammer = faHammer;
  faFire = faFire;
  faQuestion = faQuestion;
  faTimes = faTimes

  showForm1: boolean = false;
  showForm2: boolean = false;
  showForm3: boolean = false;
  clicked1: boolean = false;
  clicked2: boolean = false;
  clicked3: boolean = false;

  addForm1() {
    this.showForm1 = !this.showForm1;
    this.showButton = true;
    this.clicked1 = !this.clicked1;
  }

  addForm2() {
    this.showForm2 = !this.showForm2;
    this.showButton = true;
    this.clicked2 = !this.clicked2;
  }
  addForm3() {
    this.showForm3 = !this.showForm3;
    this.showButton = true;
    this.clicked3 = !this.clicked3;
  }
  ngOnInit(): void {

  }
}