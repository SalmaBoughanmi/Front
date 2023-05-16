import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

getAllEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
}

addEmployee({ addEmployeeRequest }: { addEmployeeRequest: Employee; }) {
  addEmployeeRequest.employe_id = 0 ;
  return this.http.post(this.baseApiUrl + '/api/employees' ,
  addEmployeeRequest,{ responseType: 'text' });
}

getEmployee(id: string): Observable<Employee>{
 return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id)
}

updateEmployee(id: number, updateEmployeeRequest: Employee): Observable<Employee> {
return this.http.put<Employee>(this.baseApiUrl + '/api/employees/'+ id,
updateEmployeeRequest);
}
deleteEmployee(id:number){
  return this.http.delete(this.baseApiUrl + '/api/employees/' + id,{ responseType: 'text' })
}
getAllmydemande(id:any){
  console.log(id)
  return this.http.get(this.baseApiUrl+'/api/Demandes/type/'+id)

}
}

