import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginPage} from './login/login.page';
import {FullComponent} from './shared/layouts/full/full.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ComptePage} from './compte/compte.page';
import {CoursChangePage} from './cours-change/cours-change.page';
import {OperationPage} from './compte/operation/operation.page';
import {ChequierPage} from './demande/chequier/chequier.page';
import {CartePage} from './demande/carte/carte.page';
import {LivretPage} from './demande/livret/livret.page';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard],
    component: FullComponent, children: [
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'compte', component: ComptePage},
      {path: 'cours-change', component: CoursChangePage},
      {path: 'operation/:id', component: OperationPage},
      {path: 'demande/chequier', component: ChequierPage},
      {path: 'demande/carte', component: CartePage},
      {path: 'demande/livret', component: LivretPage},
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
