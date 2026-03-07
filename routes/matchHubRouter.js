import express from "express";
import { findAndCreateMatch } from "../controllers/matchHubController.js";

const matchRouter = express.Router();

// Algorithm එක run කරලා match එකක් හොයන route එක
matchRouter.post("/check", findAndCreateMatch);

export default matchRouter;