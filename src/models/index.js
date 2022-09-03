const dbConfig = require("./db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
console.log(dbConfig);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.admins = require("./admins.model")(sequelize, Sequelize);
db.articles = require("./articles.model")(sequelize, Sequelize);
db.shops = require("./shops.model")(sequelize, Sequelize);
db.tools = require("./tools.model")(sequelize, Sequelize);
db.rents = require("./rents.model")(sequelize, Sequelize);
module.exports = db;