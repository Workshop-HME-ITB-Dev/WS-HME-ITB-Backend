module.exports = (sequelize, Sequelize) => {
    const Tool = sequelize.define("tool", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        activated: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        totalStock: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceHour: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        priceDay: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Tool;
};