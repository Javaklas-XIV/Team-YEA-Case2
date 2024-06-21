import {Injectable} from '@angular/core';
import {User} from "../domain/User";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, Subject, throwError} from "rxjs";
import {mapStringToUserRole, UserRoles} from "../util/enum";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = 'http://localhost:9080/yea-backend/users'
  public static readonly emptyUser = {username: '', password: '', role: UserRoles.Client} as User;
  public message$ = new Subject<string>();
  public isAdmin = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(user: User): void {
    this.http.post<User>(`${this.uri}/login`, user, {observe: 'response'})
      .subscribe({
        next: (response: HttpResponse<User>): void => {
          const loggedInUser = response.body ?? UserService.emptyUser;
          const token = loggedInUser.token;
          if (token) {
            localStorage.setItem('token', JSON.stringify(token));
            this.successfulLogin(loggedInUser);
          } else {
            this.message$.next("Naam of wachtwoord is fout ingevoerd");
          }
        },
        error: (errorResponse) => {
          this.message$.next("Naam of wachtwoord is fout ingevoerd")
        }
      })
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getUserRole(): Boolean | null {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role == UserRoles.Medewerker;
    }
    return null;
  }

  loggedInUser(): User | null {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('token')) as User;
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

  private successfulLogin(user: User): void {
    try {
      const role = mapStringToUserRole(user.role);
      if (role === UserRoles.Client) {
        this.message$.next("Welkom gebruiker!");
        this.router.navigateByUrl("home");
      } else if (role === UserRoles.Medewerker) {
        this.message$.next("Welkom Medewerker!");
        this.router.navigateByUrl("admin");
      } else {
        this.message$.next("Naam of wachtwoord is fout ingevoerd");
      }
    } catch (error) {
      console.error(error);
      this.message$.next("Naam of wachtwoord is fout ingevoerd");
    }
  }

  register(user: User) {
    if(this.isAdmin){user.role = <UserRoles>"Medewerker"}
    if(!this.isAdmin){user.role = <UserRoles>"Client"}
    this.http.post<User>(`${this.uri}/accountbeheer`, user, {observe: 'response'})
      .pipe(
        catchError((error) => {
          if (error.status === 500) {
            this.message$.next("Gebruikers naam bestaat al");
          }
          if (error.status === 401){
            this.message$.next("Niet geauthoriseerd, log aub opnieuw in")
          }
          return throwError(error);
        })
      )
      .subscribe()
    this.message$.next("Account is aangemaakt")
  };
}

// const headers = new HttpHeaders({
//   'Content-Type': 'application/json',
// // @ts-ignore
//   'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')) as string,
// })

