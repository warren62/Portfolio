import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  isLoading: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required, Validators.maxLength(256)]),
      sendCopyToSelf: new FormControl(false),
      honeypot: new FormControl("")
    })
  }

  onSubmit(){
    // TODO: dispatch action
  }

}
