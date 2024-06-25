import {Antwoord} from "./antwoord";

export interface MeerkeuzeAntwoord extends Antwoord {
  // type: 'M';
  antwoord: number[];
}
