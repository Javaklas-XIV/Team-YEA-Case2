import {FormulierObject} from "./formulier-object";
import {Vraag} from "./vraag";

export interface OpenVraag extends Vraag {
  type: 'O';
  maxAantalTekens: number;
}
