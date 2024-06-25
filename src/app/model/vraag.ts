import {VragenlijstObject} from "./vragenlijst-object";

export interface Vraag extends VragenlijstObject {
  vraagnummer: number;
}
