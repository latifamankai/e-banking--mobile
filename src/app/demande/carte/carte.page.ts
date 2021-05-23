import { Component, OnInit } from '@angular/core';
import {DemandeCarte} from "../../shared/model/demande-carte";
import {DemandeCarteService} from "../../shared/services/demande-carte.service";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.page.html',
  styleUrls: ['./carte.page.scss'],
})
export class CartePage implements OnInit {

  demandes: DemandeCarte[];
  constructor(private demandeCarteService: DemandeCarteService) { }

  ngOnInit() {
    const idClient = JSON.parse(localStorage.getItem('currentUser')).id;
    this.demandeCarteService.getByClient(idClient).subscribe(data => {
      this.demandes = data;
    }, ex => console.log(ex));
  }

}
