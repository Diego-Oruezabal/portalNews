import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url_base = 'https://api.spaceflightnewsapi.net/v4/articles/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/?has_event=false&has_launch=false&limit=10';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  search(query: string): Observable<any> {
    return this.http.get<any>(`${url_base}?title_contains=${query}`);
  }

  ordeingByTitle(): Observable<any> {
    const url = `${url_base}?has_event=false&has_launch=false&ordering=published_at&limit=10`;
    return this.http.get<any>(url);
}
}
