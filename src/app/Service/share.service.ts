import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public baseUrl = `https://dummyjson.com/products`;
  constructor(private http:HttpClient) { }
  getAll() {
    return this.http.get<any[]>(this.baseUrl);
}
}
