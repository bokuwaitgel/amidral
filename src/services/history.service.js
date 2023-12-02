import db from "../config/db.js";
import { getAssets, createAssets } from "./assets.service.js";
export const getHistory = (game_id) => {
  return "test";
};
export const createHistory = (history) => {
  return "test";
};

// export const getHistory = (game_id) => {
//   const query = "SELECT * FROM history WHERE game_id = ?";
//   const data = new Promise((resolve, reject) => {
//     db.execute(query, [game_id])
//       .then((result) => resolve(result))
//       .catch((err) => reject(err));
//   });
//   const assets = new Promise((resolve, reject) => {
//     getAssets(data[0].assets).then((result) => resolve(result));
//   });
//   return {
//     name: data[0].name,
//     game_id: data[0].game_id,
//     health: data[0].health,
//     age: data[0].age,
//     mental: data[0].mental,
//     assets: assets,
//     starve: data[0].starve,
//     education: data[0].education,
//     family: data[0].family,
//   };
// };

// export const createHistory = (history) => {
//   const query =
//     "INSERT INTO history (name, game_id, health, age, mental, assets, starve, education, family) VALUES (?,?,?, ?, ?, ?, ?, ?, ?)";
//   const { name, game_id, health, age, mental, starve, education, family } =
//     history;
//   const assets = name + game_id;
//   const assets_list = history.assets_list;
//   assets_list.forEach((asset) => {
//     createAssets({ name, asset, assets });
//   });
//   return new Promise((resolve, reject) => {
//     db.execute(query, [
//       name,
//       game_id,
//       health,
//       age,
//       mental,
//       assets,
//       starve,
//       education,
//       family,
//     ])
//       .then((result) => resolve(result))
//       .catch((err) => reject(err));
//   });
// };
