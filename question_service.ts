import { Injectable} from '@angular/core';
import {QBType,QBASE} from './keys';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    
    addQuestionBase(_QBase:QBType){
       QBASE.push(_QBase);
    }
    getQuestionBase(){
      return of(QBASE);
    }
}