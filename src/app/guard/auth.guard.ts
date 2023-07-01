import { CanActivateFn, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenStorage=inject(TokenStorageService);
  const router=inject(Router)
  const toastr=inject(ToastrService)
  const authService=inject(AuthService)

  if (authService.isLoggedIn()) {
    return true;
  }else{
    toastr.error('please login')
    router.navigate(['/']);
    return false;
  }

};
