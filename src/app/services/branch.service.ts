import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from '../models/branch';
import { Observable, catchError, retry, throwError } from 'rxjs';


const baseUrl= 'http://localhost:8080/api/branches'

@Injectable({
  providedIn: 'root'
})

export class BranchService {
  
  constructor(private http:HttpClient) { } 

  getAll():Observable<Branch[]>{
    return this.http.get<Branch[]>(baseUrl+"/allBranches")
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
     );
  }

  getOneBranch(id:string):Observable<Branch>{
    return this.http.get<Branch>(baseUrl+ "/" +id) 
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
     );
  }

  addBranch(branch):Observable<any>{
    return this.http.post(baseUrl + "/addBranch",branch)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
     );
  }

  deleteBranch(id):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
     );
  }

  updateBranch(id,data): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data)
  }


  private httpErrorHandler (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       console.error("A client side error occurs. The error message is " + error.message);
    } else {
       console.error(
          "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
    }

    return throwError(()=>"Error occurred. Please try again");//new Error ("Error occurred. Please try again")
 }

}
