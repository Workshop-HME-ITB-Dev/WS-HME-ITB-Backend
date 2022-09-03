module.exports = (sequelize, Sequelize) => {
    const Shop = sequelize.define("shop", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

    });
    return Shop;
};