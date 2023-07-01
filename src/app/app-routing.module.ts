import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesListComponent } from './components/branches-list/branches-list.component';
import { BranchDetailsComponent } from './components/branch-details/branch-details.component';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './guard/auth.guard';
import { adminGuard } from './guard/admin.guard';
import { UsersListComponent } from './components/users-list/users-list.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'branches',  component: BranchesListComponent,canActivate:[authGuard]  },
  { path: 'branches/:id',  component: BranchDetailsComponent,canActivate:[adminGuard] },
  { path: 'add',  component: AddBranchComponent,canActivate:[adminGuard]  },
  { path: 'edit/:id',  component: EditComponent ,canActivate:[adminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent ,canActivate:[authGuard] },
  { path: 'users',  component: UsersListComponent,canActivate:[adminGuard]  },
  { path: 'users/edit/:id',  component: EditUserComponent,canActivate:[adminGuard] },
  { path: '**',  redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
