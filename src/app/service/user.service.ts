import {Injectable} from '@angular/core';
import {User} from "../domain/User";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {mapStringToUserRole, UserRoles} from "../util/enum";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = 'http://localhost:9080/yea-backend/users'
  public static readonly emptyUser = {username: '', password: '', role: UserRoles.Client} as User;
  public message$ = new Subject<string>();

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

  loggedInUser(): User | null {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('token')) as User;
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  private successfulLogin(user: User): void {
    try {
      const role = mapStringToUserRole(user.role);
      if (role === UserRoles.Client) {
        this.message$.next("Welkom gebruiker!");
        this.router.navigateByUrl("home");
      } else if (role === UserRoles.Admin) {
        this.message$.next("Welkom admin!");
        this.router.navigateByUrl("admin");
      } else {
        this.message$.next("Naam of wachtwoord is fout ingevoerd");
      }
    } catch (error) {
      console.error(error);
      this.message$.next("Naam of wachtwoord is fout ingevoerd");
    }
  }
}
