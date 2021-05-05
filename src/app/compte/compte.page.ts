import {Component, OnInit} from '@angular/core';
import {CompteService} from '../shared/services/compte.service';
import {Compte} from '../shared/model/compte';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
  comptes: Compte[];

  constructor(private compteService: CompteService) {
  }

  ngOnInit() {
    const idClient = JSON.parse(localStorage.getItem('currentUser')).id;
    this.compteService.getByClient(idClient).subscribe(data => {
      this.comptes = data;
    }, ex => console.log(ex));
  }

}
