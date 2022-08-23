import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QBType } from './keys';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: ['']
})
export class DynamicFormComponent implements OnInit {
  @Input() qbases!:QBType[] | null;
  form!:FormGroup;

  constructor(private qcs:QuestionControlService ) { }

  ngOnInit(): void {
    this.form=this.qcs.toFormGroup(this.qbases as QBType[]);
  }

}
