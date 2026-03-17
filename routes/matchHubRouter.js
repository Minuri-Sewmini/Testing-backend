import express from "express";

import { findAndCreateMatch, getAllMatches } from "../controllers/matchHubController.js";

const matchRouter = express.Router();


matchRouter.post("/check", findAndCreateMatch);


matchRouter.get("/history", getAllMatches);

export default matchRouter;