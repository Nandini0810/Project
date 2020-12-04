import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {
addForm:FormGroup
cname:any=[]
exams:any=[]
a:boolean
b:boolean
question:any
isRegister: boolean = false;
resp:string
headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http:HttpClient) {
    this.addForm=new FormGroup({
      filePath:new FormControl(null,[Validators.required]),
      company:new FormControl(null,[Validators.required]),
      subject:new FormControl(null,[Validators.required]),
      level:new FormControl(null,[Validators.required]),
      eexam:new FormControl
    })
   }

  ngOnInit(): void {
    this.fetchcomp()
  }
submitFile(){
  this.question.path=this.addForm.value.filePath
  this.question.cname=this.addForm.value.company
  this.question.ename=this.addForm.value.eexam;
  this.question.level=this.addForm.value.level
  this.http.post("https://localhost:44314/try",JSON.stringify(this.question), {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {this.resp = res.toString();
  this.isRegister = true;
})
  .catch();
  console.log(this.addForm.value.path)

}
fetchcomp(){
  this.cname=this.http.get("https://localhost:44314/getuniquec").subscribe((data)=>{this.cname=data;})
  }
  fetchexam(){
    const params=new HttpParams().set("name",this.addForm.value.company);
    this.exams=this.http.get("https://localhost:44314/getuniquee?",{params}).subscribe((data)=>{this.exams=data;})
    }
c1(){
this.a=true
this.b=false
console.log("abc")
}
c2(){
  this.b=true
  this.a=false
  console.log("xyz")
  }
}
