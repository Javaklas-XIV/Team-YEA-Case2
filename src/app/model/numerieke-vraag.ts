import {VragenlijstObject} from "./vragenlijst-object";
import {Vraag} from "./vraag";

export interface NumeriekeVraag extends Vraag {
  type: 'N';
  minimum: number;
  maximum: number;
}
