import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailStoreFacade } from '@app/core/email/store/email-store.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(private fb: FormBuilder, private facade: EmailStoreFacade) { }

  ngOnInit(): void {
    this.loading$ = this.facade.sending$;

    this.form = this.fb.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required, Validators.maxLength(256)]),
      subject: new FormControl(null),
      sendCopyToSelf: new FormControl(false),
      honeypot: new FormControl("")
    })
  }

  onSubmit() {
    const formValue = this.form.value;
    const subject = formValue.subject;
    const html = this.createEmailHtml(formValue.message);
    this.facade.sendEmail(formValue.email, 'warren6838@gmail.com', 'test', html)
    this.form.reset();
  }

  createEmailHtml(message: string): string {
    return `<p>${message}</p>`;
  }

}
