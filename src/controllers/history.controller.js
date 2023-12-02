import * as historyServices from "../services/history.service.js";

export const getHistory = (req, res) => {
  const { game_id } = req.params;
  historyServices
    .getHistory(game_id)
    .then((result) => {
      res.status(200).json({
        message: "History retrieved successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const createHistory = (req, res) => {
  const history = req.body;
  historyServices
    .createHistory(history)
    .then(() => {
      res.status(200).json({
        message: "History created successfully",
        data: history,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
