import { Component, OnInit } from '@angular/core';
import{CompanyService} from '../services/companyService';
import{Companies} from '../models/companyModel';
import { FormBuilder, Validators } from "@angular/forms";
import { FormControl, FormGroup} from '@angular/forms';
import { Subscription, timer } from 'rxjs';
import { HttpClient , HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companydetails: any;
  subjectdetails: any;
  company:string;
  subject:any;
  companyid : any;
  registrationForm:FormGroup;
  object:any[];
  countDown:Subscription;
  counter = 8;
  tick = 1000;
  constructor(public fb: FormBuilder, private http:HttpClient) {
    this.registrationForm = new FormGroup({
      companyName:new FormControl(null,[Validators.required]),
      subjectName:new FormControl(null,[Validators.required]),
       
    });
   }
  
  
  onSubmit() {
    if (!this.registrationForm.valid) {
      return false;
    }
    else{
      alert(this.companyid+" "+ this.subject);
    }
    
    
  }
  
  ngOnInit(): void {
    
    this.fetchCompany();
    // while(this.counter!=0)
    // {
    //   this.countDown = timer(0,this.tick).subscribe(()=>--this.counter)
    // }
    // //this.countDown=null;
    alert("Time Out");
  
    
  }
  fetchCompany()
  {
    this.companydetails = this.http.get("https://localhost:44314/getuniquec").subscribe((data)=>
    {this.companydetails=data; console.log(data)})
    console.log("abc");
  }
  fetchSubject()
  {
    const params=new HttpParams().set("name",this.registrationForm.value.companyName);
    this.subjectdetails = this.http.get("https://localhost:44314/getuniquee?",{params}).subscribe((data)=>
    {this.subjectdetails=data; console.log(data)})
    console.log("xyz");
  }
}