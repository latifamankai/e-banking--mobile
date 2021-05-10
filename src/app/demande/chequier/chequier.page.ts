import { Component, OnInit } from '@angular/core';
import {DemandeChequierService} from '../../shared/services/demande-chequier.service';
import {DemandeChequier} from '../../shared/model/demande-chequier';

@Component({
  selector: 'app-chequier',
  templateUrl: './chequier.page.html',
  styleUrls: ['./chequier.page.scss'],
})
export class ChequierPage implements OnInit {
  demandes: DemandeChequier[];
  constructor(private demandeChequierService: DemandeChequierService) { }

  ngOnInit() {
    const idClient = JSON.parse(localStorage.getItem('currentUser')).id;
    this.demandeChequierService.getByClient(idClient).subscribe(data => {
      this.demandes = data;
    }, ex => console.log(ex));
  }

}
