export abstract class Service<Request = any, Response = any> {
  abstract exec(request: Request): Promise<Response>;
}
