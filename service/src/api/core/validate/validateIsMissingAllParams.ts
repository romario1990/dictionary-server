import { MissingParamError } from "../../../exceptions/MissingParamError";

export function validateIsMissingAllParams<T extends Object>(
  body: T,
  keys: Array<keyof T>
): void {
  const bKeys = Object.keys(body).filter((k) => keys.includes(k as keyof T));

  if (bKeys.length <= 0) {
    throw new MissingParamError(keys.join(", "));
  }
}
