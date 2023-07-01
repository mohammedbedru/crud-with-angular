import { CanActivateFn, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const tokenStorage=inject(TokenStorageService);
  const router=inject(Router)
  const toastr=inject(ToastrService)

  const user = tokenStorage.getUser();
  // const roles = user.roles;
  const authService=inject(AuthService)

  if (authService.isLoggedIn()) {
    if (user.roles.includes('ROLE_ADMIN')) {
      return true;
    }else{
      toastr.warning('permission denied')
      router.navigate(['/home']);
      return false;
    }
  }else{
    window.location.reload();////added casually
    router.navigate(['/']);
    return false;
  }
  
};
