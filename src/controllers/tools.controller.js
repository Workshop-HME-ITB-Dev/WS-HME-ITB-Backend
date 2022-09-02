const findAllTools = async (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        data: "",
        message: "Get All Tools Success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        data: error.message,
        message: "Problem with Server",
      });
    }
  };
  
  const createTool = async (req, res) => {
    try {
      res.status(201).json({
        status: "success",
        data: req.body,
        message: "Create Tool Success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        data: error.message,
        message: "Problem with Server",
      });
    }
  };
  
  const findToolById = async (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        data: "id: " + req.params.id,
        message: "Get Tool by id Success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        data: error.message,
        message: "Problem with Server",
      });
    }
  };
  
  const updateToolById = async (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        data: {
          id: req.params.id,
          body: req.body,
        },
        message: "Update Tool by id Success",
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        data: error.message,
        message: "Problem with Server",
      });
    }
  };
  
  const deleteToolById = async (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        data: {
          id: req.params.id,
          body: req.body,
        },
        message: "Delete Tool by id Success",
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
    findAllTools,
    findToolById,
    createTool,
    updateToolById,
    deleteToolById,
  };
  