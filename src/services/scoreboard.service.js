import db from "../config/db.js";

export const getScoreboard = (name) => {
  const query = "SELECT * FROM scoreboard WHERE name = ?";
  return new Promise((resolve, reject) => {
    db.execute(query, [name])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createScoreboard = (scoreboard) => {
  const query = "INSERT INTO scoreboard (name, score) VALUES (?,?)";
  const { name, score } = scoreboard;
  return new Promise((resolve, reject) => {
    db.execute(query, [name, score])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

// export const createCountry = (country) => {
//   return new Promise((resolve,reject) => {
//       const query = 'INSERT INTO country (name, capital, currency) VALUES (?,?,?)';

//       const {name, capital, currency} = country;

//       db.execute(query, [name, capital, currency])
//       .then((result) => resolve(result))
//       .catch((err) => reject(err));
//   });
// };
