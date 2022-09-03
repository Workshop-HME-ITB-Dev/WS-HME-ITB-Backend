const db = require('../models');
const Rent = db.rents;

const findAllRents = async (req, res) => {
  try {
    const rents = await Rent.findAll();
    res.status(200).json({
      status: "success",
      data: rents,
      message: "Get All Rents Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const createRent = async (req, res) => {
  try {
    const rent = req.body;
    await Rent.create(rent);
    res.status(201).json({
      status: "success",
      data: rent,
      message: "Create Rent Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const findRentById = async (req, res) => {
  try {
    const id = req.params.id;
    const rent = await Rent.findByPk(id);
    if (rent) {
      res.status(200).json({
        status: "success",
        data: rent,
        message: "Get Rent by id Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Rent not found !",
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

const updateRentById = async (req, res) => {
  try {
    const id = req.params.id;
    const rent = await Rent.findByPk(id);
    if (rent) {
      await Rent.update(req.body, {
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: req.body,
        message: "Update Rent Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Rent not found !",
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

const deleteRentById = async (req, res) => {
  try {
    const id = req.params.id;
    const rent = await Rent.findByPk(id);
    if (rent) {
      await Rent.destroy({
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: rent,
        message: "Delete Rent Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Rent not found !",
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
  findAllRents,
  findRentById,
  createRent,
  updateRentById,
  deleteRentById,
};
