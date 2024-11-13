import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:5000/api/ComentariosCliente';

  constructor(private http: HttpClient) {}

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  sendResponse(commentId: number, responseText: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddResponse/${commentId}`, { response: responseText });
  }
}