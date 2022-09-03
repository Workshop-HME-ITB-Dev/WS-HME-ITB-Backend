const db = require("../models");
const { validateRegisterInput, validateAdminUpdateInput } = require("../utils/input.validator");
const Admin = db.admins;

const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');

const findAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json({
      status: "success",
      data: admins.map(x => {
        return {
          id: x.id,
          email: x.email,
          name: x.name,
          createdAt: x.createdAt,
          updatedAt: x.updatedAt
        }
      }),
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
    validateRegisterInput(req.body);
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
    // find user with the same email
    const { email, name, password } = req.body;
    const foundAdmin = await Admin.findOne({ where: { email: email } });
    console.log(foundAdmin);
    if (foundAdmin) {
      res.status(401).json({
        status: "error",
        data: null,
        message: "Email already Exists !",
      });
      return;
    }
    // save with salted password 
    const admin = req.body;
    admin.password = bcrypt.hashSync(admin.password, bcrypt.genSaltSync(Number(process.env.SALT)));
    await Admin.create(admin);
    res.status(201).json({
      status: "success",
      data: null,
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
        data: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          createdAt: admin.createdAt,
          updatedAt: admin.updatedAt
        },
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
    validateAdminUpdateInput(req.body);
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
    const admin = await Admin.findByPk(id);
    if (admin) {
      await Admin.update(req.body, {
        where: { id: id }
      })
      res.status(200).json({
        status: "success",
        data: {
          id: req.body.id,
          email: req.body.email,
          name: req.body.name,
          createdAt: req.body.createdAt,
          updatedAt: req.body.updatedAt
        },
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
