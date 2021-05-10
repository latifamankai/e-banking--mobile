import {Compte} from './compte';


export class DemandeCarte {
  id: number;
  numCarte: string;
  Date: Date;
  dateExpiration: Date;
  statutDemande: string;
  typeCarte: string;
  compte: Compte;
}
