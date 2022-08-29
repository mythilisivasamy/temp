import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { QuestionBaseComponent } from './question-base.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { QuestionComponent } from './question.component';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionBaseComponent,
    DynamicFormComponent,
    QuestionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
