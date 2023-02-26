export function isNumeric(val: number | string): val is number {
  return !isNaN(Number(val));
}
