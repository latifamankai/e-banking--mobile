import {Compte} from './compte';

export class DemandeLivret {
  id: number;
  date: Date;
  nbrLivret: number;
  statutDemande: string;
  compte: Compte;
}
