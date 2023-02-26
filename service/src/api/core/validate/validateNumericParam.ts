import { NotANumberError } from "../../../exceptions/NotANumberError";
import { isNumeric } from "../../../helpers/isNumeric";

export function validateNumericParam<T>(param: T, keys: Array<keyof T>): void {
  for (const key of keys) {
    if (!isNumeric(Number(param[key]))) {
      throw new NotANumberError(String(key));
    }
  }
}
