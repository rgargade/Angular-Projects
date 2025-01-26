import { CanActivateFn,Router } from '@angular/router';
import { routes } from './app.routes';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  let isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if(isLoggedIn == 'false'){
    router.navigate(['login'])
    alert("Please login, redirect to login page");
    return false;
  }
  return true;
};
