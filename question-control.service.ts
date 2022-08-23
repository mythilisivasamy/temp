import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QBType } from './keys';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }
  toFormGroup(qbases:QBType[]){
    const group:any={};
    qbases.forEach(qbase => {
      group[qbase.key]=new FormControl(qbase.value || '');
    })
    return new FormGroup(group);
  }
}
