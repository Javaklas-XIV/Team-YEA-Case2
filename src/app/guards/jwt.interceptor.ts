import {HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {UserService} from "../service/user.service";
import {Observable} from "rxjs";
import {inject, Injectable} from "@angular/core";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.userService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.loggedInUser()?.token}`
        }
      });
    }

    return next.handle(request);
  }
}
export function jwtInterceptorFn(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  const userService = inject(UserService)

  if (userService.isLoggedIn()) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userService.loggedInUser()}`
      }
    });
  }
  return next(req);
}
