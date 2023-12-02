import { Router } from "express";
// import countryRouter from "./country.route.js";
import scoreboardRouter from "./scoreboard.route.js";
import historyRouter from "./history.route.js";

const indexRouter = Router();

const prefix = "/api";

// root endpoint
indexRouter.get(prefix, (req, res) => {
  res.send("Welcome to Amidral API");
});

// get Countries
// indexRouter.use(`${prefix}/country`, countryRouter);

// scoreboard
indexRouter.use(`${prefix}/scoreboard`, scoreboardRouter);

// history
indexRouter.use(`${prefix}/history`, historyRouter);

export default indexRouter;
