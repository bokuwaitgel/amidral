import { Router } from "express";

import {
  getScoreboard,
  createScoreboard,
} from "../controllers/scoreboard.controller.js";

const scoreboardRouter = Router();
const prefix = "/";

// get scoreboard
scoreboardRouter.get(`/:name`, getScoreboard);

// create scoreboard
scoreboardRouter.post(`/`, createScoreboard);

export default scoreboardRouter;
