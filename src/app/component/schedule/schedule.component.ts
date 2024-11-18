import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  
  preview: string | null = null; // Almacena la URL de vista previa
  // Variables para mostrar/ocultar ventanas flotantes
  showNotifications = false;
  showLanguage = false;
  showAccount = false;

  // Variables para el formulario de vehículo
  vehicle = {
    type: '',
    model: '',
    plate: '',
    year: ''
  };

  onFileSelected(event: any): void {
    const file = event.target.files[0]; // Obtén el archivo seleccionado
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.preview = reader.result as string; // Almacena la URL de la imagen para la vista previa
      };
      reader.readAsDataURL(file); // Lee el archivo como URL base64
    } else {
      alert('Solo se permiten imágenes en formato PNG o JPG');
    }
  }
  // Variables para la sección Motivo
  selectedMotivo = '';
  motivos = ['Reparación', 'Limpieza', 'Cambio de aceite', 'Alinear'];
  stockAvailable = false;

  // Variables para la sección Información del cliente
  clientInfo = {
    name: '',
    paymentMethod: ''
  };

  // Productos y cálculo de total
  products = [
    { name: 'Producto A', price: 50 },
    { name: 'Producto B', price: 30 },
    // Puedes añadir más productos si es necesario
  ];

  totalPrice: number = 0;

  constructor() {
    this.calculateTotal(); // Calcula el precio total al iniciar el componente
  }

  // Método para mostrar/ocultar la ventana de notificaciones
  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
    this.showLanguage = false;
    this.showAccount = false;
  }

  // Método para mostrar/ocultar la ventana de idiomas
  toggleLanguage(): void {
    this.showLanguage = !this.showLanguage;
    this.showNotifications = false;
    this.showAccount = false;
  }

  // Método para mostrar/ocultar la ventana de cuenta
  toggleAccount(): void {
    this.showAccount = !this.showAccount;
    this.showNotifications = false;
    this.showLanguage = false;
  }

  // Método para calcular el precio total
  calculateTotal(): void {
    this.totalPrice = this.products.reduce((sum, product) => sum + product.price, 0);
  }

  // Método para comprobar si hay stock
  checkStock(): void {
    if (this.selectedMotivo && this.stockAvailable) {
      alert(`Stock disponible para ${this.selectedMotivo}`);
    } else {
      alert('No hay stock disponible');
    }
  }

  // Método para manejar la impresión de la orden
  printOrder(): void {
    window.print(); // Esto abre el diálogo de impresión del navegador
  }

  // Método para manejar el envío del formulario
  submitForm(): void {
    if (this.isFormValid()) {
      alert('Formulario enviado con éxito');
      this.resetForm();
    } else {
      alert('Por favor, completa todos los campos obligatorios');
    }
  }

  // Método para cancelar y resetear el formulario
  cancelForm(): void {
    if (confirm('¿Estás seguro de que deseas cancelar?')) {
      this.resetForm();
    }
  }

  // Validación básica del formulario
  isFormValid(): boolean {
    return (
      this.vehicle.type !== '' &&
      this.vehicle.model !== '' &&
      this.vehicle.plate !== '' &&
      this.vehicle.year !== '' &&
      this.selectedMotivo !== '' &&
      this.clientInfo.name !== '' &&
      this.clientInfo.paymentMethod !== ''
    );
  }

  // Método para resetear el formulario
  resetForm(): void {
    this.vehicle = { type: '', model: '', plate: '', year: '' };
    this.selectedMotivo = '';
    this.stockAvailable = false;
    this.clientInfo = { name: '', paymentMethod: '' };
    this.products = [
      { name: 'Producto A', price: 50 },
      { name: 'Producto B', price: 30 },
    ];
    this.calculateTotal(); // Recalcula el total después de reiniciar los productos
  }

  // Método para cerrar sesión
  logout(): void {
    alert('Has cerrado sesión');
    // Aquí puedes agregar la lógica de cierre de sesión real
  }
}
