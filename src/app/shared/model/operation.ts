import {Compte} from './compte';
import {TypeOperation} from './type-operation';
import {Balance} from './balance';

export class Operation {
  id: number;
  montant: number;
  numCompteDebiteur: string;
  numCompteCrediteur: string;
  compte: Compte;
  typeOperation: TypeOperation;
  balance: Balance;
}
