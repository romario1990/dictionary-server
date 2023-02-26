export interface IUsecase<Request = any, Response = any> {
  handle: (request: Request) => Promise<Response>;
}
