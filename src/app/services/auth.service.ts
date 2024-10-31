@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private baseUrl = 'http://appsystemrewards.somee.com/api/AuthCompany';
  
    constructor(private http: HttpClient) {}
  
    login(credentials: CompanyLoginDto): Observable<AuthResult> {
      return this.http.post<AuthResult>(${this.baseUrl}/login, credentials);
    }
  
    register(userData: CompanyRegisterDto): Observable<AuthResult> {
      return this.http.post<AuthResult>(${this.baseUrl}/register, userData);
    }
  
    // Guardar el token en localStorage
    saveToken(token: string): void {
      localStorage.setItem('token', token);
    }
  
    // Obtener el token
    getToken(): string | null {
      return localStorage.getItem('token');
    }
  
    // Verificar si el usuario está autenticado
    isAuthenticated(): boolean {
      return this.getToken() !== null;
    }
  
    // Cerrar sesión
    logout(): void {
      localStorage.removeItem('token');
    }
  }