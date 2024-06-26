import {VragenlijstObject} from "./vragenlijst-object";
import {Vraag} from "./vraag";

export interface MeerkeuzeVraag extends Vraag {
  type: 'M';
  minAantalKeuzes: number;
  maxAantalKeuzes: number;
  keuzemogelijkheden: string[];
  antwoordNaarVervolgvraag: Map<number, VragenlijstObject>
}

