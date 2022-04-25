import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Input() showForm1: boolean;
  @Input() showForm2: boolean;
  @Input() showForm3: boolean;

  faExclamationTriangle = faExclamationTriangle;

  loading = false;

  nameFormControl = new FormControl;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  messageFormControl = new FormControl;


  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  ngOnInit() {

  }

  sendMail() {
    let formSubject = document.getElementById("formSubject").innerHTML;

    let reqObj = {
      subject: formSubject,
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      message: this.messageFormControl.value
    }
    this.emailService.sendMessage(reqObj).subscribe(data => {
      console.log(`Message ${data}`);

      if (data == "error") {
        window.location.href = "/?type=error&msg=Lähetys epäonnistui";
      }
      else if (data == "Sent Successfully") {
        window.location.href = "/?type=success&msg=Lähetys onnistui";
      }
      else {
        window.location.href = "/?type=success&msg=virhe";
      }
    })
  }
}