import {Antwoord} from "./antwoord";
import {Vragenlijst} from "./vragenlijst";

export interface IngevuldeVragenlijst {
  id: number;
  antwoorden: Antwoord[];
  vragenLijstDto: Vragenlijst;
  userId: number;
}
