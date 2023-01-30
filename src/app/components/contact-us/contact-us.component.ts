import { ContactService } from './../../contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
  FormData: FormGroup | any = this.builder.group({
    name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required])
    })
  constructor(private builder: FormBuilder , private contact: ContactService , private router:Router) {}
  ngOnInit() {
    // this.FormData = this.builder.group({
    // name: new FormControl('', [Validators.required]),
    // Email: new FormControl('', [Validators.required, Validators.email]),
    // phone: new FormControl('', [Validators.required]),
    // desc: new FormControl('', [Validators.required])
    // })
  }
  onSubmit(data: any) {
    this.contact.sendEmail(data).subscribe((data: any) => {
      location.href = 'https://mailthis.to/confirm'
    },(error: HttpErrorResponse) => {
      console.warn(error)
      console.log({ error })
    })
  }
}
