import { NextFunction, Request, Response } from "express";
import { IFactory } from "../interfaces";
import { Service } from "../Service";

export type HttpRequest<B = any, P = any, Q = any> = {
  body: B;
  params: P;
  query: Q;
};

export type HttpResponse = {
  status: number;
  message: string;
  [key: string]: any;
};

export const expressRouterAdapterFactory =
  (factory: IFactory<Service>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const request: HttpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
      };

      const controller = factory({ connection: "" }); // TODO add connection?
      const response = await controller.exec(request);

      if (response?.httpStatus) {
        const { httpStatus, ...rest } = response;
        res.status(httpStatus).send(rest);
      } else {
        res.send(response);
      }
    } catch (e) {
      next(e);
    }
  };
