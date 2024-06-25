import {VragenlijstObject} from "./vragenlijst-object";

export interface VragenlijstOnderdeel extends VragenlijstObject {
  type: 'F';
  onderdelen: VragenlijstObject[];
}
