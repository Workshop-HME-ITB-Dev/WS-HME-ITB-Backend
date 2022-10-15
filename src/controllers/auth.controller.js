const db = require('../models');
const Admin = db.admins;
const { validateLoginInput, validateRegisterInput } = require('../utils/input.validator');
const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    validateLoginInput(req.body);
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
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email: email } });
    console.log(admin);
    const comparePassword = await bcrypt.compare(
      password,
      admin ? admin.password : "False"
    );
    if (!comparePassword || !admin) {
      res.status(403).json({
        status: "error",
        message: "Password or user invalid",
      });
      return;
    }

    const token = jwt.sign(
      { id: admin.id, name: admin.name, email: admin.email },
      String(process.env.SECRET)
    );
    console.log( { id: admin.id, name: admin.name, email: admin.email });

    res.status(200).json({
      status: "success",
      data: {
        id: admin.id,
        token: token
      },
      message: "Login Success",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
      message: "Problem with Server",
    });
  }
};

module.exports = { login };
