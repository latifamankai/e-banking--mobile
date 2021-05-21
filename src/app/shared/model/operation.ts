import {Compte} from './compte';

import {Balance} from './balance';

export class Operation {
  id: number;
  montant: number;
  numCompteDebiteur: string;
  numCompteCrediteur: string;
  compte: Compte;
  typeOperation: string;
  balance: Balance;
}
