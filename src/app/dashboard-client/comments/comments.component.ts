import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from '../../services/coment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsClientComponent implements OnInit {
  commentText: string = '';
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  // Cargar todos los comentarios
  loadComments(): void {
    this.commentService.getAllComments().subscribe({
      next: (data: Comment[]) => {
        this.comments = data;
      },
      error: (err: any) => {
        console.error('Error loading comments:', err);
      },
    });
  }

  // Enviar un nuevo comentario
  submitComment(): void {
    if (this.commentText.trim()) {
      const newComment: Omit<Comment, 'id'> = {
        order_Id: 1, // Puedes ajustar según la lógica del cliente
        client_Id: 1, // Reemplazar con el ID del cliente autenticado
        comment: this.commentText,
        autor: 'Cliente Anónimo', // Cambiar si tienes autenticación
        qualification: 5, // Calificación fija o basada en la entrada
      };

      this.commentService.createComment(newComment).subscribe({
        next: (createdComment: Comment) => {
          this.comments.push(createdComment);
          this.commentText = ''; // Limpia el formulario
        },
        error: (err: any) => {
          console.error('Error creating comment:', err);
        },
      });
    }
  }
}
