import { Component, OnInit } from "@angular/core";
import * as data from './data.json';
import { Candidate } from "./modal/candidate.modal";

@Component({
  selector:'candidate',
  templateUrl:'candidate.component.html'
})
export class CandidateComponent implements OnInit{
    candidates: Candidate[] = (data as any).default;
     originalCandidateList= JSON.parse(JSON.stringify( this.candidates));
     isMaleChecked=false;
    isFemaleChecked=false;
    candidate:Candidate=new Candidate();
     searchText="";


  ngOnInit(){

  }

  search(){
  if(this.searchText!=""){
   this.candidates= this.candidates.filter(
      a=> (a.first_name==this.searchText) || (a.last_name==this.searchText) || (a.email==this.searchText))
  }else if(this.searchText==""){
this.candidates= JSON.parse(JSON.stringify( this.originalCandidateList));
  }
  }

  addNewRecord(){
    this.candidate.id= Math.floor(Math.random() * Math.floor(80));
    this.candidates.push(this.candidate);
    this.candidate=new Candidate();
  }

  toggleVisibility(e){
      this.candidates=  JSON.parse(JSON.stringify( this.originalCandidateList));
    if(e.target.value=='Male'){
      if(e.target.checked){
      this.isMaleChecked=true
  this.candidates= this.candidates.filter(a=>a.gender!="Female");
      }else{
        console.log("sss");
        this.isMaleChecked=false;
        if( this.isFemaleChecked){
          this.candidates= this.candidates.filter(a=>a.gender!="Male");
        }
  

      }
    }
     else if(e.target.value=='Female' ){
       if(e.target.checked){
        this.isFemaleChecked=true;
  this.candidates= this.candidates.filter(a=>a.gender!="Male");
       }else{
        this.isFemaleChecked=false;
          if( this.isMaleChecked){
          this.candidates= this.candidates.filter(a=>a.gender!="Female");
        }

       }
       if((this.isFemaleChecked && this.isMaleChecked) ||(this.isFemaleChecked && this.isMaleChecked)){
               this.candidates=  JSON.parse(JSON.stringify( this.originalCandidateList));

       }
  }
}
}

