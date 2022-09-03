const db = require('../models');
const { validateCreateToolInput, validateUpdateToolInput } = require('../utils/input.validator');
const Tool = db.tools;

const findAllTools = async (req, res) => {
  try {
    const tools = await Tool.findAll();
    res.status(200).json({
      status: "success",
      data: tools,
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
    validateCreateToolInput(req.body);
  }
  catch (error) {
    res.status(400).json({
      status: "error",
      data: error.message,
      message: "Invalid Input",
    });
    return;
  }
  try {
    const tool = req.body;
    await Tool.create(tool);
    res.status(201).json({
      status: "success",
      data: tool,
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
    const id = req.params.id;
    const tool = await Tool.findByPk(id);
    if (tool) {
      res.status(200).json({
        status: "success",
        data: tool,
        message: "Get Tool by id Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Tool not found !",
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

const updateToolById = async (req, res) => {
  try {
    validateUpdateToolInput(req.body);
  }
  catch (error) {
    res.status(400).json({
      status: "error",
      data: error.message,
      message: "Invalid Input",
    });
    return;
  }
  try {
    const id = req.params.id;
    const tool = await Tool.findByPk(id);
    if (tool) {
      await Tool.update(req.body, {
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: req.body,
        message: "Update Tool Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Tool not found !",
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

const deleteToolById = async (req, res) => {
  try {
    const id = req.params.id;
    const tool = await Tool.findByPk(id);
    if (tool) {
      await Tool.destroy({
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: tool,
        message: "Delete Tool Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Tool not found !",
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
  findAllTools,
  findToolById,
  createTool,
  updateToolById,
  deleteToolById,
};
