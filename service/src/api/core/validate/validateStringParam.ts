import { NotAStringError } from "../../../exceptions/NotAStringError";
import { isString } from "../../../helpers/isString";

export function validateStringParam<T>(param: T, keys: Array<keyof T>): void {
  for (const key of keys) {
    if (!param[key] || !isString(String(param[key]))) {
      throw new NotAStringError(String(key));
    }
  }
}
