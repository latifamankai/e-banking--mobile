import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {LoginPage} from './login/login.page';

@NgModule({
  declarations: [AppComponent,
    LoginPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    FormsModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
