const findAllShops = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "",
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
    res.status(201).json({
      status: "success",
      data: req.body,
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
    res.status(200).json({
      status: "success",
      data: "id: " + req.params.id,
      message: "Get Shop by id Success",
    });
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
    res.status(200).json({
      status: "success",
      data: {
        id: req.params.id,
        body: req.body,
      },
      message: "Update Shop by id Success",
    });
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
    res.status(200).json({
      status: "success",
      data: {
        id: req.params.id,
        body: req.body,
      },
      message: "Delete Shop by id Success",
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
  findAllShops,
  findShopById,
  createShop,
  updateShopById,
  deleteShopById,
};
