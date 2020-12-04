import {HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'; 
import {NgForm} from '@angular/forms';
import { Companies } from '../models/companyModel';

@Injectable()
export class CompanyService
{
    constructor (private http:HttpClient, private http1:HttpClient)
    {

    }
    
    getCompany()
    {
        //debugger;
        return this.http.get("http://localhost:44314/companysearch");
    }
    getSubject(id:number)
    {
        //debugger;
        return this.http.get("http://localhost:44314/select/"+id);
    }
    
}