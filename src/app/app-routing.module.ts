import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardContainerComponent } from './dashboard/dashboard.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'; //admin
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { CommentsComponent } from './component/comments/comments.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { StockProductsComponent } from './component/stock-products/stock-products.component';
import { DataPolicyComponent } from './data-policy/data-policy.component';

import { CommentsClientComponent } from './dashboard-client/comments/comments.component';
import { ColaComponent } from './dashboard-client/cola/cola.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // Ruta de autenticación (login/registro)
  { path: 'auth', component: AuthComponent },
  
  // Redirigir al login si no se especifica un path
  { path: '', redirectTo: '/auth', pathMatch: 'full' },

  // Ruta para el dashboard general (maneja roles dinámicamente)
  { 
    path: 'dashboard', 
    component: DashboardContainerComponent, 
    canActivate: [AuthGuard] 
  },

  // Ruta específica para el dashboard de administrador
  { 
    path: 'admin-dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Admin' } // Solo accesible para administradores
  },

  // Ruta específica para el dashboard de cliente
  { 
    path: 'client-dashboard', 
    component: DashboardClientComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Cliente' }, // Solo accesible para clientes
    children : [
      { path: '', component: ColaComponent },
      { path: 'commentsclient', component: CommentsClientComponent}
    ]
  },

  // Otras rutas comunes accesibles para usuarios autenticados
  { path: 'comments', component: CommentsComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },

  // Ruta protegida para el inventario, solo accesible para administradores
  { 
    path: 'stock-products', 
    component: StockProductsComponent, 
    canActivate: [AuthGuard], 
    data: { role: 'Admin' } // Solo accesible para administradores
  },

  // Ruta para la política de datos
  { path: 'data-policy', component: DataPolicyComponent },

  // Ruta para manejar cualquier otra dirección inválida
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
