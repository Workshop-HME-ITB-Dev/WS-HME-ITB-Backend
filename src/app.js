const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const {
  findAllAdmins,
  createAdmin,
  findAdminById,
  updateAdminById,
} = require("./controllers/admins.controller");
const { login } = require("./controllers/auth.controller");
const {
  deleteArticleById,
  findAllArticles,
  createArticle,
  findArticleById,
  updateArticleById,
} = require("./controllers/articles.controller");
const {
  findAllShops,
  createShop,
  findShopById,
  updateShopById,
  deleteShopById,
} = require("./controllers/shops.controller");
const {
  findAllRents,
  createRent,
  findRentById,
  updateRentById,
  deleteRentById,
} = require("./controllers/rents.controller");
const {
  findAllTools,
  createTool,
  findToolById,
  updateToolById,
  deleteToolById,
} = require("./controllers/tools.controller");
const db = require("./models");

dotenv.config();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Workshop HME ITB!",
  });
});

app.get("/version", (req, res) => {
  res.send({
    version: "V1.01",
  });
});

// DB Sync

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Auth
app.post("/login", login);
// Admin
app.get("/admins", findAllAdmins);
app.post("/admins", createAdmin);
app.get("/admins/:id", findAdminById);
app.put("/admins/:id", updateAdminById);
// Articles
app.get("/articles", findAllArticles);
app.post("/articles", createArticle);
app.get("/articles/:id", findArticleById);
app.put("/articles/:id", updateArticleById);
app.delete("/articles/:id", deleteArticleById);
// Shops
app.get("/shops", findAllShops);
app.post("/shops", createShop);
app.get("/shops/:id", findShopById);
app.put("/shops/:id", updateShopById);
app.delete("/shops/:id", deleteShopById);
// Tools
app.get("/tools", findAllTools);
app.post("/tools", createTool);
app.get("/tools/:id", findToolById);
app.put("/tools/:id", updateToolById);
app.delete("/tools/:id", deleteToolById);
// Rents
app.get("/rents", findAllRents);
app.post("/rents", createRent);
app.get("/rents/:id", findRentById);
app.put("/rents/:id", updateRentById);
app.delete("/rents/:id", deleteRentById);

module.exports = app;
