import express from "express";
// getAllMatches controller එකත් මෙතනට import කරගන්න
import { findAndCreateMatch, getAllMatches } from "../controllers/matchHubController.js";

const matchRouter = express.Router();

// 1. Algorithm එක run කරලා match එකක් හොයන route එක (POST)
matchRouter.post("/check", findAndCreateMatch);

// 2. දැනට සිද්ධ වෙලා තියෙන සියලුම matches (History) බලන route එක (GET)
matchRouter.get("/history", getAllMatches);

export default matchRouter;