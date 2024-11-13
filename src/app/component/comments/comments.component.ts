import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/coment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  selectedComment: any;
  responseText: string = '';
  showNotifications: boolean = false;
  showAccount: boolean = false; // Puedes cambiar el valor inicial según tu necesidad

  constructor(private commentService: CommentService, private router : Router) {}

  ngOnInit(): void {
    this.loadComments(); // Carga los comentarios al iniciar el componente
  }
  logout(): void {
    // Aquí puedes añadir la lógica de cierre de sesión
    // Por ejemplo, eliminar el token de autenticación y redirigir al inicio de sesión
    localStorage.removeItem('authToken'); // o la clave que uses para almacenar el token
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }
  navigateToLogin() {
    this.router.navigate(['/login']); // Redirige al usuario a la página de login
  }

  loadComments(): void {
    this.commentService.getComments().subscribe(
      (data) => {
        this.comments = data;
      },
      (error) => {
        console.error('Error loading comments', error);
      }
    );
  }
  toggleNotifications() {
    // Lógica para alternar notificaciones
    this.showNotifications = !this.showNotifications;
  }
  toggleLanguage() {
    // Lógica para cambiar el idioma o lo que necesites hacer
    console.log("Idioma alternado");
  }
  toggleAccount() {
    this.showAccount = !this.showAccount; // Alterna el valor de showAccount
  }
  getArrayOfStars(stars: number): any[] {
    return Array(stars);
  }

  selectComment(comment: any): void {
    this.selectedComment = comment;
  }

  sendResponse(): void {
    if (this.selectedComment && this.responseText) {
      const response = {
        commentId: this.selectedComment.id,
        text: this.responseText
      };
      this.commentService.sendResponse(this.selectedComment.id, this.responseText).subscribe(
        (res) => {
          alert('Response sent successfully!');
          this.selectedComment.responses.push(response); // Actualiza el comentario en la interfaz
          this.responseText = ''; // Limpia el campo de respuesta
        },
        (error) => {
          console.error('Error sending response', error);
        }
      );
    } else {
      alert('Please select a comment and enter a response.');
    }
  }
}
