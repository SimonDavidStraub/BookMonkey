import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiUrl = 'https://api3.angular-buch.com/secure';
  private books: Book[];

  constructor(
    private httpClient: HttpClient
  ) { }

    getAll(): Observable<Book[]> {
      return this.httpClient.get<Book[]>(`${this.apiUrl}/books`);
    }

    getSingle(isbn: string): Observable<Book> {
      return this.httpClient.get<Book>(`${this.apiUrl}/book/${isbn}`);
    }

    remove(isbn: string): Observable<any> {
      return this.httpClient.delete(`${this.apiUrl}/book/${isbn}`, { responseType: 'text' });
    }

    restore():Observable<any> {
      return this.httpClient.delete(`${this.apiUrl}/books`, { responseType: 'text' });
    }

}
