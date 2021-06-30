import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss']
})
export class FormInputFieldComponent implements OnInit {

  @Input() control: FormControl = new FormControl();
  @Input() errorMessage: string = '';
  @Input() type: string = 'input';
  @Input() placeholder: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
