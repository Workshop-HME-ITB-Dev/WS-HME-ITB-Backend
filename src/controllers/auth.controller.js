const { validateLoginInput } = require('../utils/input.validator');

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
    res.status(200).json({
      status: "success",
      data: req.body,
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
