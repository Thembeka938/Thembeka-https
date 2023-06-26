import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProjectService {
  private apiUrl = 'https://api.agify.io';

  constructor(private http: HttpClient) { }

  getName(name: string): Observable<any> {
    const url = `{this.apiUrl}name={name}`;
    return this.http.get(url);
  }
}
