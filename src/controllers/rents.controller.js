const findAllRents = async (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        data: "",
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
      res.status(201).json({
        status: "success",
        data: req.body,
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
      res.status(200).json({
        status: "success",
        data: "id: " + req.params.id,
        message: "Get Rent by id Success",
      });
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
      res.status(200).json({
        status: "success",
        data: {
          id: req.params.id,
          body: req.body,
        },
        message: "Update Rent by id Success",
      });
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
      res.status(200).json({
        status: "success",
        data: {
          id: req.params.id,
          body: req.body,
        },
        message: "Delete Rent by id Success",
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
    findAllRents,
    findRentById,
    createRent,
    updateRentById,
    deleteRentById,
  };
  