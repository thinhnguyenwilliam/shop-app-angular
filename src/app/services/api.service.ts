import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) { }

  // GET request
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // POST request
  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }

  // PUT request
  updatePost(id: number, postData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, postData);
  }

  // DELETE request
  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
