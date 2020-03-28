import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CandidateComponent } from './candidate.component';
import { CandidateRouteModule } from './candidate.routing';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,CandidateRouteModule],
  declarations: [  CandidateComponent],
  bootstrap:    [  ]
})
export class CandidateModule { }
