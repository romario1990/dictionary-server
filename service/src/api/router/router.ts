import { Router } from "express";
import { oxfordRouter } from "../controller";

const router = Router();

// TODO create midware token
router.use("/dictionary", oxfordRouter);

export { router };
