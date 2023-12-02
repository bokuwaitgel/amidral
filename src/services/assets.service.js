import db from "../config/db.js";

export const getAssets = (asset) => {
  const query = "SELECT * FROM assets WHERE asset = ?";
  return new Promise((resolve, reject) => {
    db.execute(query, [asset])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createAssets = (assets) => {
  const query = "INSERT INTO assets (name, asset, asset_name) VALUES (?,?,?)";
  const { name, asset, asset_name } = assets;
  return new Promise((resolve, reject) => {
    db.execute(query, [name, asset, asset_name])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
