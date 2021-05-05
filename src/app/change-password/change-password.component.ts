import {Component, OnInit} from '@angular/core';

import {AuthService} from '../shared/services/auth.service';
import {ClientService} from '../shared/services/client.service';
import {ToastController} from '@ionic/angular';



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  pwd: any = {id: '', oldPassword: '', newPassword: ''};
  confirmerPassword: string;

  constructor(private clientService: ClientService,
              private toastController: ToastController,
              private authenticationService: AuthService) {
  }

  ngOnInit(): void {
  }

  changePwd(): void {
    this.pwd.id = JSON.parse(localStorage.getItem('currentUser')).id;
    this.clientService.changePassword(this.pwd).subscribe(
      data => {
        if (data.success) {
          this.presentToast(data.message + ':' + data.detail, 'success')

          this.authenticationService.logout();
        } else {
          this.presentToast(data.message + ':' + data.detail, 'warning')

        }
      },
      ex => {
        this.presentToast('Erreur de modification', 'danger')
        console.log(ex);
      }
    );
  }

  async presentToast(message, coleur) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: coleur
    });
    toast.present();
  }
}
