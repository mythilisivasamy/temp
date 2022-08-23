import { Component} from '@angular/core';
import { FormArray, FormGroup ,FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {QBType} from './keys';
import { QuestionService } from './question_service';


@Component({
  selector: 'app-question-base',
  templateUrl: './question-base.component.html',
  styles: []
})
export class QuestionBaseComponent  {
  
  constructor(private qbs:QuestionService) { }
  isMakeQuestion:boolean=false;
  QBase$!:QBType;
  QBases$!:Observable<QBType[]>;
  questionsForm=new FormGroup({
    key : new FormControl(''),
    label : new FormControl(''),
    value : new FormControl(''),
    required : new FormControl(''),
    type : new FormControl(''),
    order : new FormControl('')
  })
  
  get key(){
    return this.questionsForm.get('key');
  }
  get label(){
    return this.questionsForm.get('label');
  }

  get value(){
    return this.questionsForm.get('value');
  }

  get type(){
    return this.questionsForm.get('type');
  }
  
   makeQuestion(){
    this.isMakeQuestion=true;
   }

   addToDbase(){
    this.QBase$={
      key:this.key?.value,
      label:this.label?.value,
      value:this.value?.value,
      type:this.type?.value
       }
       this.qbs.addQuestionBase(this.QBase$);
       this.QBases$=this.qbs.getQuestionBase();
       this.isMakeQuestion=false;
   }

}
