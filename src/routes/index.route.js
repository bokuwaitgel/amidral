import { Router } from "express";
import countryRouter from "./country.route.js";

const indexRouter = Router();
const prefix = "/api";

// root endpoint     
indexRouter.get(prefix, (req,res) => {
    res.send("Welcome to Planetscale API");
})

// get Countries
indexRouter.use(`${prefix}/country`, countryRouter);

export default indexRouter;