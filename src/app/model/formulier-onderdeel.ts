import {FormulierObject} from "./formulier-object";

export interface FormulierOnderdeel extends FormulierObject {
  type: 'F';
  onderdelen: FormulierObject[];
}
