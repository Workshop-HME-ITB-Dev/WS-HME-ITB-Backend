const findAllAdmins = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "",
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
    res.status(200).json({
      status: "success",
      data: "id: " + req.params.id,
      message: "Get Admin by id Success",
    });
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
    res.status(200).json({
      status: "success",
      data: {
        id: req.params.id,
        body: req.body,
      },
      message: "Update Admin by id Success",
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
  findAllAdmins,
  createAdmin,
  findAdminById,
  updateAdminById,
};
