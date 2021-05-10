import {Compte} from './compte';


export class DemandeChequier {
  id: number;
  date: Date;
  nbrCheque: number;
  barre: boolean;
  statutDemande: string;
  compte: Compte;
}
