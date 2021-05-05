import { Component, OnInit } from '@angular/core';
import {Client} from '../shared/model/client';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  client = new Client();

  constructor(
    private router: Router,
    private toastController: ToastController,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    localStorage.clear();
  }


  authentifier(): void {

    this.authService.login(this.client).subscribe(res => {
      this.authService.storeTocken(res.token);
      localStorage.setItem('currentUser', JSON.stringify(res.client));
      this.router.navigate(['/']);

    }, error => {
    /*  this.messageService.add({
        severity: 'error',
        summary: 'Erreur d\'auuthentification',
        detail: error.error.message
      });*/

      this.presentToast();
      console.log(error);
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Erreur d\'authentification',
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
}
