module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        desc: {
            type: Sequelize.STRING,
            allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        publishedDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return Article;
};