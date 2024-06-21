import {Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {UserService} from "../service/user.service";

export const authGuardMedewerker = (state: RouterStateSnapshot) => {
  const router = inject(Router)
  const userService = inject(UserService)

  if (userService.isLoggedIn() && userService.getUserRole()) {
    return true;
  }

  // not logged in so redirect to login page with the return url
  router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  return false;
}
