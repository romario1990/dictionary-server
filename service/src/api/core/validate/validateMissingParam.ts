import { MissingParamError } from "../../../exceptions/MissingParamError";

export function validateMissingParam<T>(param: T, keys: Array<keyof T>): void {
  for (const key of keys) {
    if (!param[key]) {
      throw new MissingParamError(String(key));
    }
  }
}
