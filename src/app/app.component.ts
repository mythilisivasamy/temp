import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Template of QuestionBase';
  _scores=new FormArray([]);
   _categoryId:number=101;
  isNewCategory:boolean=false;
  isCategoryExist:boolean=false;
  category$ = new Set<any>();
  _ansOptions:number[]=[1,2,3,4,5,6,7,8,9,10];
  _ansType:string[]=['button','checkbox','color','date','email','file','hidden','radio','range','tel','text'];
   questionbase = new FormGroup({
    name: new FormControl(''),
    categoryName:new FormControl({value:'',disabled:false}),
    categoryId:new FormControl({value:'',disabled:false}),
    QLabel:new FormControl(''),
    QTitle:new FormControl(''),
    ans_type:new FormControl(''),
    ans_option:new FormControl(''),
    level:new FormControl(''),
    answers:new FormArray([])
    });

    get ans_type(){
      return this.questionbase.get('ans_type');
    }
    get ans_option(){
      return this.questionbase.get('ans_option');
    }
    get level(){
      return this.questionbase.get('level');
    }
   get categoryName(){
    return this.questionbase.get('categoryName');
   }
   get categoryId(){
    return this.questionbase.get('categotyId');
   }
 
    get QTitle() {
      return this.questionbase.get('QTitle');
    }
     get QLabel() {
      return this.questionbase.get('QLabel');
     }

    get ans_count() {
     return this.questionbase.get('ans_count');
     }
  
  get answers(){
    return this.questionbase.get('answers') as FormArray;
  }

  
  get answer() { return this.questionbase.get('answers')?.get('answer'); }
    
  addCategory() {this.isNewCategory=true;}

  addNewCategory(val:string){
    this.isCategoryExist=false;
    this.isNewCategory=false;
    this.category$.forEach(item=>{
      if(item.name == val){
        this.isCategoryExist=true;
        alert('category already exist');
      }
    })

      if(!this.isCategoryExist){
        this.category$.add({
        id:this._categoryId++,
        name: val
      }) 
      }
    }

    setCategory(val:string){
      this.category$.forEach(item=>{
        if(item.id == val){
          this.questionbase.patchValue({
            categoryName: item.name,
            categoryId:item.id
          })
        }
      })
      
    }

    setAnswers(){
      this.answers.controls=[];
      this._scores.controls=[];
      for(let i=0;i<this.questionbase.get('ans_option')?.value;i++){
        this.answers.push(new FormGroup({
          answer: new FormControl(''),
          scores: new FormArray([])
        }));
        for(let j=0;j<this.questionbase.get('level')?.value;j++){
         this.getScores(i).push(new FormGroup({'score':new FormControl('')}))
        
      }
}
}
getScores(ansIndex:number):FormArray{
  return this.answers.at(ansIndex).get('scores') as FormArray;
  }
}