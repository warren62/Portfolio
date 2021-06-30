import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormSelectOption } from './models/form-select-option.model';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() options: FormSelectOption[] = [];
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
