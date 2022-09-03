const db = require('../models');
const { validateCreateShopInput, validateUpdateShopInput } = require('../utils/input.validator');
const Shop = db.shops;

const findAllShops = async (req, res) => {
  try {
    const shops = await Shop.findAll();
    res.status(200).json({
      status: "success",
      data: shops,
      message: "Get All Shops Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const createShop = async (req, res) => {
  try {
    validateCreateShopInput(req.body);
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
    const shop = req.body;
    await Shop.create(shop);
    res.status(201).json({
      status: "success",
      data: shop,
      message: "Create Shop Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const findShopById = async (req, res) => {
  try {
    const id = req.params.id;
    const shop = await Shop.findByPk(id);
    if (shop) {
      res.status(200).json({
        status: "success",
        data: shop,
        message: "Get Shop by id Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Shop not found !",
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

const updateShopById = async (req, res) => {
  try {
    validateUpdateShopInput(req.body);
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
    const shop = await Shop.findByPk(id);
    if (shop) {
      await Shop.update(req.body, {
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: req.body,
        message: "Update Shop Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Shop not found !",
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

const deleteShopById = async (req, res) => {
  try {
    const id = req.params.id;
    const shop = await Shop.findByPk(id);
    if (shop) {
      await shop.destroy({
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: shop,
        message: "Delete Shop Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Shop not found !",
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
  findAllShops,
  findShopById,
  createShop,
  updateShopById,
  deleteShopById,
};
