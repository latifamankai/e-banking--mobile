import {Component, OnInit} from '@angular/core';
import {ROUTES} from './menu-items';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Client} from '../../model/client';
import {AuthService} from '../../services/auth.service';


declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];
  name: string;
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) {
  }

  // this is for the open close
  addExpandClass(element: any): void {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  addActiveClass(element: any): void {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  // End open close
  ngOnInit(): void {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
   const client= JSON.parse(localStorage.getItem('currentUser'));
    if(client.raisonSociale) {
      this.name = client.raisonSociale;
    } else {
      this.name = client.nom + ' ' + client.prenom;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
