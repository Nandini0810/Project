import { HttpClient,HttpParams} from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import{Reports} from "../models/reports"
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
techno:any=[]
examnames:any=[]
cname:any=[]
scity:any=[]

fdetail1:any
fileName:string
a:boolean=false;
b:boolean=false;
c:boolean=false;

  constructor(private http:HttpClient) {
    this.FilterForm=new FormGroup({
      company:new FormControl,
      exam:new FormControl,
      tech:new FormControl,
      city:new FormControl,
      state:new FormControl,
      level:new FormControl,
      marks:new FormControl

    })
  }
   

  ngOnInit(): void {
    this.fetchtech()
    
    this.fetchcomp()
    
  
  }
FilterForm:FormGroup

fetchtech(){
this.techno=this.http.get("https://localhost:44314/getuniquet").subscribe((data)=>{this.techno=data;})
}
fetchexam(){
const params=new HttpParams().set("name",this.FilterForm.value.company);
this.examnames=this.http.get("https://localhost:44314/getuniquee?",{params}).subscribe((data)=>{this.examnames=data;})
}
fetchcomp(){
this.cname=this.http.get("https://localhost:44314/getuniquec").subscribe((data)=>{this.cname=data;})
}
fetchStud(){
  const params=new HttpParams().set("state",this.FilterForm.value.state)
this.scity=this.http.get("https://localhost:44314/getuniques?",{params}).subscribe((data)=>{this.scity=data;})
}
sendDetails1(){
  this.fdetail1=null;
  this.fileName=null;
  const params= new HttpParams().set("cname",this.FilterForm.value.company).set("ename",this.FilterForm.value.exam)
  .set("level",this.FilterForm.value.level).set("marks",this.FilterForm.value.marks);
  this.fdetail1=this.http.get("https://localhost:44314/reportquery1?",{params}).subscribe((data)=>this.fdetail1=data)
  console.log("https://localhost:44314/reportquery1?"+params.toString())
  this.fileName=this.FilterForm.value.company+"_"+this.FilterForm.value.exam+"_L"+this.FilterForm.value.level+
  "_M"+this.FilterForm.value.marks+".xlsx"
 
}
sendDetails2(){
  this.fdetail1=null;
  this.fileName=null;
  const params= new HttpParams().set("tname",this.FilterForm.value.tech)
  .set("level",this.FilterForm.value.level).set("marks",this.FilterForm.value.marks);
  this.fdetail1=this.http.get("https://localhost:44314/reportquery2?",{params}).subscribe((data)=>this.fdetail1=data)
  this.fileName=this.FilterForm.value.tech+"_L"+this.FilterForm.value.level+
  "_M"+this.FilterForm.value.marks+".xlsx"
}
sendDetails3(){
  this.fdetail1=null;
  this.fileName=null;
  const params= new HttpParams().set("state",this.FilterForm.value.state).set("city",this.FilterForm.value.city)
  .set("level",this.FilterForm.value.level).set("marks",this.FilterForm.value.marks);
  this.fdetail1=this.http.get("https://localhost:44314/reportquery3?",{params}).subscribe((data)=>this.fdetail1=data)
  this.fileName=this.FilterForm.value.state+"_"+this.FilterForm.value.city+"_L"+this.FilterForm.value.level+
  "_M"+this.FilterForm.value.marks+".xlsx"
}
export(){
  let element = document.getElementById('excel-table'); 
  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, this.fileName);
}
c1(){
  this.a=true;
  this.b=false;
  this.c=false;
}
c2(){
  this.a=false;
  this.b=true;
  this.c=false;
}
c3(){
  this.c=true;
  this.b=false;
  this.a=false;
}

}

