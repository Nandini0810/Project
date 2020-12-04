import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import {HttpClient} from '@angular/common/http';
declare var grecaptcha: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  student:any={};
 isRegister: boolean = false;

  constructor(private router: Router,private http:HttpClient) {
    this.ConForm = new FormGroup({
      fullname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required]),
      phonenumber: new FormControl(null,[Validators.required]),
      college: new FormControl(null,[Validators.required]),
      dob: new FormControl(null,[Validators.required]),
      city: new FormControl(null,[Validators.required]),
      state: new FormControl(null,[Validators.required]),
      qualification: new FormControl(null,[Validators.required]),
      yoc: new FormControl(null,[Validators.required]),
      password1: new FormControl(null,[Validators.required, Validators.pattern('^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$')]),
      password2: new FormControl(null,[Validators.required]),



     // recaptcha: new FormControl(null, [Validators.required]),
      
    }, {validators: this.checkPasswords}
    
    );
   }


  ngOnInit(): void {
  
  }

  students:Student[];
  ConForm:FormGroup;

  
  get password2(){
    return this.ConForm.get("password2");
  }

  get password1(){
    return this.ConForm.get("password1");
  }
  
  get yoc(){
    return this.ConForm.get("yoc");
  }
  
  
  get qualification(){
    return this.ConForm.get("qualification");
  }
  
  get state(){
    return this.ConForm.get("state");
  }
  
  get city(){
    return this.ConForm.get("city");
  }

  get dob(){
    return this.ConForm.get("dob");
  }

  get college(){
    return this.ConForm.get("college");
  }

  get phonenumber(){
    return this.ConForm.get("phonenumber");
   }

   get fullname(){
     return this.ConForm.get("fullname");
    }

    get email(){
     return this.ConForm.get("email");
    }



  headers = new Headers({ 'Content-Type': 'application/json' });

  resp:string;

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password1').value;
  let confirmPass = group.get('password2').value;

  return pass === confirmPass ? null : { notSame: true }
}
  SubmitReg(){



    console.log("heree");
    this.student.StudentName = this.ConForm.value.fullname;
    this.student.Email = this.ConForm.value.email;
    this.student.Mobile_num = this.ConForm.value.phonenumber;
    this.student.College = this.ConForm.value.college;
    this.student.DOB = this.ConForm.value.dob;
    this.student.City = this.ConForm.value.city;
    this.student.State = this.ConForm.value.state;
    this.student.Qualification = this.ConForm.value.qualification;
    this.student.Year_of_Completion = this.ConForm.value.yoc;
    this.student.Pwd = this.ConForm.value.password1;
    

    console.log(this.student);

    var res = this.http.post("https://localhost:44314/student/post",JSON.stringify(this.student), {headers:{'Content-Type': 'application/json'}}).toPromise().then(res => {this.resp = res.toString();
    this.isRegister = true;
  })
    .catch();
    console.log("here "+this.resp);
  }

}