import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QBType } from './keys';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styles: ['']
})
export class QuestionComponent implements OnInit {
  @Input() qbase!:QBType;
  @Input() form!:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
