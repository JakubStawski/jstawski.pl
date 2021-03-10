import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { FormControl, Validators } from "@angular/forms";

import { FormBuilder } from '@angular/forms';

@Component({
  selector: "app-contactform-section",
  templateUrl: './contactform-section.component.html',
  styleUrls: ["./contactform-section.component.less"]
})

export class ContactformSectionComponent implements OnInit {
  emailSent: boolean;

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  messageFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(25)
  ]);

  mailForm = this.formBuilder.group({
    name: this.nameFormControl,
    email: this.emailFormControl,
    message: this.messageFormControl,
  });

  constructor(public http: HttpService,  private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.emailSent = false;
  }

  sendMail(emailData) {
    this.emailSent = true;
    this.http.sendEmail(`http://localhost:3000/`, emailData).subscribe(
      emailData => {
        let res:any = emailData; 
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(): void {
    const emailData = this.mailForm.value;

    if (this.mailForm.valid) {
      this.sendMail(emailData);
    }
    
  }
}