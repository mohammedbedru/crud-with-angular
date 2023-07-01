import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';


const baseUrl= 'http://localhost:8080/api/users'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private http:HttpClient) { } 

  getAllUsers():Observable<any[]>{
    return this.http.get<any[]>(baseUrl+"/all")
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
     );
  }

  getOneUser(id:string):Observable<any>{
    return this.http.get<any>(baseUrl+ "/" +id) 
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
     );
  }

  deleteUser(id):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
     );
  }

  updateUser(id,data): Observable<any>{
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
