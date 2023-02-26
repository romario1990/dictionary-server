import HttpException from "./HttpException";

export class NotAStringError extends HttpException {
  constructor(paramName: string) {
    super(400, `Parameter is not a string: ${paramName}`);
    this.name = "NotAStringError";
  }
}
