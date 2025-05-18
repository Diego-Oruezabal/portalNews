import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/?has_event=false&has_launch=false&limit=10';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
