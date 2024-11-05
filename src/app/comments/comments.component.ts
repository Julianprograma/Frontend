import { Component } from '@angular/core';

interface Comment {
  username: string;
  date: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  searchTerm: string = '';
  response: string = '';
  selectedComment: Comment | null = null;

  // Simulación de roles: 'admin' o 'client'
  currentUserRole: string = 'client'; // Cambia entre 'admin' y 'client' para probar roles

  // Simulación de un usuario autenticado
  currentUser: string = 'Carlos Lopez'; // Nombre de usuario del cliente autenticado

  comments: Comment[] = [
    { username: 'Ivan Forero', date: '30/09/2024', rating: 5, comment: 'Excelente servicio!' },
    { username: 'Andres Pineda', date: '15/08/2024', rating: 4, comment: 'Muy bueno, pero se puede mejorar.' },
    { username: 'Julian Moreno', date: '10/07/2024', rating: 2, comment: 'No cumplió mis expectativas.' }
  ];

  selectComment(comment: Comment) {
    this.selectedComment = comment;
  }

  sendResponse() {
    if (this.currentUserRole === 'admin' && this.selectedComment) {
      console.log(`Respuesta enviada por administrador: ${this.response}`);
      this.response = '';
    }
  }

  submitComment(newComment: string) {
    if (this.currentUserRole === 'client' && newComment.trim()) {
      const date = new Date().toLocaleDateString();
      this.comments.push({
        username: this.currentUser,
        date: date,
        rating: 0,
        comment: newComment
      });
    }
  }

  updateRating(comment: Comment, newRating: number) {
    if (this.currentUserRole === 'client') {
      comment.rating = newRating;
    }
  }

  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }
}
