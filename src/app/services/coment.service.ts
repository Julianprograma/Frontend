import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Comment {
  id: number;
  order_Id: number;
  client_Id: number;
  comment: string;
  autor: string;
  response?: string;
  qualification: number;
  date?: string; // Fecha opcional para mostrar cuándo se creó el comentario
}

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = 'https://www.QuackTaller.somee.com/api/ComentariosCliente';

  constructor(private http: HttpClient) {}

  // Crear un nuevo comentario
  createComment(comment: Omit<Comment, 'id'>): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}/create`, comment);
  }

  // Obtener un comentario por su ID
  getCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiUrl}/Find/${id}`);
  }

  // Actualizar un comentario existente
  updateComment(id: number, updatedComment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.apiUrl}/${id}`, updatedComment);
  }

  // Eliminar un comentario (soft delete)
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  //Admin Comments
  // coment.service.ts
addResponse(commentId: number, responseText: string): Observable<boolean> {
  return this.http.post<boolean>(`${this.apiUrl}/AddResponse/${commentId}`, { response: responseText });
}

getAllComments(): Observable<Comment[]> {
  return this.http.get<Comment[]>(`${this.apiUrl}/all`);
}

}
