import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss']
})
export class FormInputFieldComponent implements OnInit {

  @Input() formControl: FormControl = new FormControl();
  @Input() errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
