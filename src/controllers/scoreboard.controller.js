import * as scoreboardService from "../services/scoreboard.service.js";

export const getScoreboard = (req, res) => {
  const name = req.params.name;
  scoreboardService
    .getScoreboard(name)
    .then((result) => {
      res.status(200).json({
        message: "Scoreboard retrieved successfully",
        data: result[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createScoreboard = (req, res) => {
  const scoreboard = req.body;
  scoreboardService
    .createScoreboard(scoreboard)
    .then(() => {
      res.status(200).json({
        message: "Scoreboard created successfully",
        data: scoreboard,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
