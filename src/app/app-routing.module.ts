import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginPage} from './login/login.page';
import {FullComponent} from './shared/layouts/full/full.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ComptePage} from './compte/compte.page';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard],
    component: FullComponent, children: [
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'compte', component: ComptePage},
    ]
  },
  {path: 'login', component: LoginPage},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
