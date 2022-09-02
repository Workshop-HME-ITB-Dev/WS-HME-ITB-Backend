const findAllArticles = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "",
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
    res.status(201).json({
      status: "success",
      data: req.body,
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
    res.status(200).json({
      status: "success",
      data: "id: " + req.params.id,
      message: "Get Article by id Success",
    });
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
    res.status(200).json({
      status: "success",
      data: {
        id: req.params.id,
        body: req.body,
      },
      message: "Update Article by id Success",
    });
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
    res.status(200).json({
      status: "success",
      data: {
        id: req.params.id,
        body: req.body,
      },
      message: "Delete Article by id Success",
    });
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
