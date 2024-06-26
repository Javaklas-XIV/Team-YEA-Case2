import {VragenlijstObject} from "./vragenlijst-object";
import {Vraag} from "./vraag";

export interface OpenVraag extends Vraag {
  type: 'O';
  maxAantalTekens: number;
}
