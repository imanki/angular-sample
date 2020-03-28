import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CandidateModule } from './candidate/candidate.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './candidate/candidate.module#CandidateModule'
  }];

@NgModule({
  imports:      [ BrowserModule, FormsModule,CandidateModule,RouterModule.forRoot(appRoutes),],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
