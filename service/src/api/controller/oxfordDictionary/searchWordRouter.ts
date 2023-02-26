import { Router } from "express";
import { expressRouterAdapterFactory } from "../../core/adapters";
import { makeSearchWordService } from "./factories/services";

const oxfordRouter = Router();

oxfordRouter.get("/search", expressRouterAdapterFactory(makeSearchWordService));

export { oxfordRouter };
