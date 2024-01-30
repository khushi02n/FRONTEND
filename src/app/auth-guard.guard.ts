import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { session } from './utils/session';

export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot,
   state:RouterStateSnapshot) => {

    const router:Router = inject(Router);
    const protectedRoutes: String[]=['/dashboard'];
    
    return protectedRoutes.includes(state.url) && !session ? router.navigate(['/login']):false;

};
