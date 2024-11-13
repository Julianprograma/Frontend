import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component'; // Importa el AuthComponent
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CommentsComponent } from './component/comments/comments.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { StockProductsComponent } from './component/stock-products/stock-products.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent }, // Ruta para el AuthComponent con login/registro
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // Redirige a auth por defecto
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'comments', component: CommentsComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'stock-products', component: StockProductsComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/auth' } // Redirige a auth si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
