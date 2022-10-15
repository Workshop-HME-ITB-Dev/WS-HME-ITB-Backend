module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("rent", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tools: {
            type: Sequelize.TEXT('long'),
            allowNull: false
        },
        rentName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rentNim: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rentPhone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rentLineId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        organisation: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fromDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        expectedReturnDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        totalPrice: {
            type: Sequelize.INTEGER
        },
        fine: {
            type: Sequelize.INTEGER
        },
        pickupName: {
            type: Sequelize.STRING
        },
        pickupNim: {
            type: Sequelize.STRING
        },
        returnName: {
            type: Sequelize.STRING
        },
        returnNim: {
            type: Sequelize.STRING
        },
        returnDate: {
            type: Sequelize.DATE
        }
    });
    return Admin;
};