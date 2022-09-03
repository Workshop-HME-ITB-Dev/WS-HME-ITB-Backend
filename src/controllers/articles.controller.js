const db = require('../models');
const Article = db.articles;

const findAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json({
      status: "success",
      data: articles,
      message: "Get All Articles Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const createArticle = async (req, res) => {
  try {
    const article = req.body;
    await Article.create(article);
    res.status(201).json({
      status: "success",
      data: article,
      message: "Create Article Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const findArticleById = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Article.findByPk(id);
    if (article) {
      res.status(200).json({
        status: "success",
        data: article,
        message: "Get Article by id Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Article not found !",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const updateArticleById = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Article.findByPk(id);
    if (article) {
      await Article.update(req.body, {
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: req.body,
        message: "Update Article Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Article not found !",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const deleteArticleById = async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Article.findByPk(id);
    if (article) {
      await Article.destroy({
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: article,
        message: "Delete Article Success",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

module.exports = {
  findAllArticles,
  findArticleById,
  createArticle,
  updateArticleById,
  deleteArticleById
};
