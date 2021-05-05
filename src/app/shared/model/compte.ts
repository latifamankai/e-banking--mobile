import {TypeCompte} from './type-compte';
import {Devise} from './devise';
import {Client} from './client';
import {Agence} from './agence';

export class Compte {
  id: number;
  rib: number;
  numCompte: string;
  typeCompte: TypeCompte;
  devise: Devise;
  agence: Agence;
  client: Client;
  status: string;
}
