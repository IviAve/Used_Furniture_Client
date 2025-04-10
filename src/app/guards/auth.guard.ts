import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,     //old CanActiveFn
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user/user.service';

export const AuthGuard: CanActivateChildFn = (     // old CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const isLogged = localStorage.getItem('isLogged') === 'true';  // test for reload
  if (isLogged || userService.isLogged) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};

