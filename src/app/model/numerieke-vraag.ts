import {FormulierObject} from "./formulier-object";
import {Vraag} from "./vraag";

export interface NumeriekeVraag extends Vraag {
  type: 'N';
  minimum: number;
  maximum: number;
}
