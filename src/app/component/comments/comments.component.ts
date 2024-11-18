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
  selectedComment: any = null;
  responseText: string = '';

  // Control de visualización de notificaciones y configuraciones
  showNotifications = false;
  showLanguage = false;
  showAccount = false;

  constructor(private commentService: CommentService, private router: Router) {}

  ngOnInit(): void {
    this.loadComments(); // Carga los comentarios al iniciar el componente
  }

  loadComments(): void {
    this.commentService.getAllComments().subscribe({
      next: (data) => {
        console.log('Comments loaded:', data); // Depuración
        this.comments = data;
      },
      error: (err) => {
        if (err.status === 404) {
          console.warn('No comments found.'); // Manejo específico para 404
          this.comments = []; // Asegúrate de que la lista esté vacía
        } else {
          console.error('Error loading comments:', err); // Otros errores
        }
      },
    });
  }
  
  

  // Obtener array de estrellas para mostrar la calificación visualmente
  getArrayOfStars(stars: number): any[] {
    return Array(stars);
  }

  // Seleccionar un comentario y asegurarse de que las respuestas estén inicializadas
  selectComment(comment: any): void {
    this.selectedComment = comment;
    if (!this.selectedComment.responses) {
      this.selectedComment.responses = []; // Inicializa responses si está undefined
    }
  }

  sendResponse(): void {
    if (this.selectedComment && this.responseText.trim()) {
      this.commentService.addResponse(this.selectedComment.id, this.responseText).subscribe({
        next: (success) => {
          if (success) {
            alert('Response sent successfully!');
            if (!this.selectedComment.responses) {
              this.selectedComment.responses = []; // Asegúrate de inicializar responses
            }
            this.selectedComment.responses.push({ text: this.responseText }); // Actualiza la interfaz
            this.responseText = ''; // Limpia el campo de respuesta
          }
        },
        error: (error) => {
          console.error('Error sending response:', error);
        },
      });
    } else {
      alert('Please select a comment and enter a response.');
    }
  }
  

  // Funciones para controlar la visualización de notificaciones y configuraciones
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showLanguage = false;
    this.showAccount = false;
  }

  toggleLanguage() {
    this.showLanguage = !this.showLanguage;
    this.showNotifications = false;
    this.showAccount = false;
  }

  toggleAccount() {
    this.showAccount = !this.showAccount;
    this.showNotifications = false;
    this.showLanguage = false;
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken'); // Elimina el token de autenticación
    this.router.navigate(['/login']); // Redirige al inicio de sesión
  }
}
