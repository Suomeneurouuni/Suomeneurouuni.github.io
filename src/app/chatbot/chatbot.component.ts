import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css',]
})
export class ChatbotComponent implements OnInit {
  faTimes = faTimes;
  faComment = faComment;
  checked: boolean = false;
  showBtn: boolean = true;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    const url = window.location.href;
    let paramValue;
    if (url.includes('type') && ('msg')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      const type = httpParams.get("type");
      const msg = httpParams.get("msg");
      this.showMessage(type, msg);
    }
  }

  showMessage(type, msg) {
    let msgBox = document.getElementById("msg-box");

    if (type == "success") {
      msgBox.classList.remove("alert-danger");
      msgBox.classList.add("alert-success");
    }
    else if (type == "error") {
      msgBox.classList.remove("alert-success");
      msgBox.classList.remove("alert-warning");
      msgBox.classList.add("alert-danger");
    }
    msgBox.querySelector("p").innerHTML = msg;
    msgBox.classList.remove("d-none");

  }

  popMessages = [
    {
      user: 'Yhteydenottobotti🤖',
      msg: '👋Hei olen Suomen Eurouuni yhteydenottobotti'
    }
  ];

  messages = [
    {
      user: 'Yhteydenottobotti🤖',
      msg: '👋Hei olen Suomen Eurouuni yhteydenottobotti'
    },
    {
      user: 'Yhteydenottobotti🤖',
      msg: 'Valitse aihe jonka kanssa tarvitset apua alta'
    }
  ];

  function() {
    this.showBtn = !this.showBtn;
  }

  checkChange() {
    this.checked = !this.checked;
    let wrapper = document.getElementById("wrapper0");
    wrapper.style.display = "none";
  }

  close() {
    let msgBox = document.getElementById("msg-box");
    msgBox.style.display = "none";
  }

  scroll = (): void => {
    let scrollHeigth;
    let wrapper = document.getElementById("wrapper0");

    if (window.innerWidth < 150) {
      scrollHeigth = 10;
    }
    else {
      scrollHeigth = 1000;
    }

    if (window.scrollY >= scrollHeigth) {
      wrapper.className = "wrapper0 show";
    }
  }
}