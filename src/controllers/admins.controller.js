const db = require("../models");
const Admin = db.admins;

const findAllAdmins = async (req, res) => {
  try {
    const admin = await Admin.findAll();
    res.status(200).json({
      status: "success",
      data: admin,
      message: "Get All Admins Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const createAdmin = async (req, res) => {
  try {
    const admin = req.body;
    await Admin.create(admin);
    res.status(201).json({
      status: "success",
      data: req.body,
      message: "Create admin Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

const findAdminById = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await Admin.findByPk(id);
    if (admin) {
      res.status(200).json({
        status: "success",
        data: admin,
        message: "Get Admin by id Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Admin not found !",
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

const updateAdminById = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await Admin.findByPk(id);
    if (admin) {
      await Admin.update(req.body, {
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: admin,
        message: "Update Admin Success",
      });
    }
    else {
      res.status(404).json({
        status: "failed",
        data: null,
        message: "Admin not found !",
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
  findAllAdmins,
  createAdmin,
  findAdminById,
  updateAdminById,
};
