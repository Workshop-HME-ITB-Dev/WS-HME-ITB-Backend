const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { uploadHandler, upload } = require("./utils/storage");
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
  findAllRentsRestricted,
} = require("./controllers/rents.controller");
const {
  findAllTools,
  createTool,
  findToolById,
  updateToolById,
  deleteToolById,
} = require("./controllers/tools.controller");
const db = require("./models");
const auth = require("./middleware/auth");

dotenv.config();
app.use(cors());

app.use(express.json());

// DB Sync
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.get("/", (req, res) => {
  res.send({
    message: "Workshop HME ITB!",
  });
});

app.get("/version", (req, res) => {
  res.send({
    version: "V1.01"
  });
});

// Serve Static Image
app.use('/uploads', express.static('uploads'))

// Upload Image
app.post('/uploads', auth, upload.single('image'), uploadHandler)

// Auth
app.post("/login", login);
// Admin
app.get("/admins", auth, findAllAdmins);
app.post("/admins", auth, createAdmin);
app.get("/admins/:id", auth, findAdminById);
app.put("/admins/:id", auth, updateAdminById);
// Articles
app.get("/articles", findAllArticles);
app.post("/articles", auth, createArticle);
app.get("/articles/:id", auth, findArticleById);
app.put("/articles/:id", auth, updateArticleById);
app.delete("/articles/:id", auth, deleteArticleById);
// Shops
app.get("/shops", findAllShops);
app.post("/shops", auth, createShop);
app.get("/shops/:id", auth, findShopById);
app.put("/shops/:id", auth, updateShopById);
app.delete("/shops/:id", auth, deleteShopById);
// Tools
app.get("/tools", findAllTools);
app.post("/tools", auth, createTool);
app.get("/tools/:id", auth, findToolById);
app.put("/tools/:id", auth, updateToolById);
app.delete("/tools/:id", auth, deleteToolById);
// Rents
app.get("/rents", auth, findAllRents);
app.get("/restrict/rents", findAllRentsRestricted);
app.post("/rents", createRent);
app.get("/rents/:id", auth, findRentById);
app.put("/rents/:id", auth, updateRentById);
app.delete("/rents/:id", auth, deleteRentById);

module.exports = app;
