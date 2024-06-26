import {VragenlijstOnderdeel} from "./vragenlijst-onderdeel";

export interface Vragenlijst {
  id: number;
  formulierOnderdeel: VragenlijstOnderdeel;
  name: string;
}
