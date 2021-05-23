import { Component, OnInit } from '@angular/core';

import {DemandeLivret} from "../../shared/model/demande-livret";
import {DemandeLivretService} from "../../shared/services/demande-livret.service";

@Component({
  selector: 'app-livret',
  templateUrl: './livret.page.html',
  styleUrls: ['./livret.page.scss'],
})
export class LivretPage implements OnInit {

  demandes: DemandeLivret[];
  constructor(private demandeLivretService: DemandeLivretService) { }

  ngOnInit() {
    const idClient = JSON.parse(localStorage.getItem('currentUser')).id;
    this.demandeLivretService.getByClient(idClient).subscribe(data => {
      this.demandes = data;
    }, ex => console.log(ex));
  }
}
