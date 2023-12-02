import { Router } from "express";

import {
  getHistory,
  createHistory,
} from "../controllers/history.controller.js";

const historyRouter = Router();
const prefix = "/";

//get history
historyRouter.get(`/:game_id`, getHistory);

//create history
historyRouter.post(`/`, createHistory);

export default historyRouter;
