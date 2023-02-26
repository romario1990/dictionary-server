export default class HttpException extends Error {
  status: number;
  message: string;
  content: any;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export { HttpException };
