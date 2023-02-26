import HttpException from "./HttpException";

export class NotANumberError extends HttpException {
  constructor(paramName: string) {
    super(400, `Parameter is not a number: ${paramName}`);
    this.name = "NotANumberError";
  }
}
