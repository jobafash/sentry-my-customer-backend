const Response = require("../util/response_manager");
const HttpStatus = require("../util/http_status");
const Store = require("../models/store");

exports.getAllStores = async (req, res, next) => {
  try {
    let stores = await Store.find().select("-__v").sort({
      createdAt: -1,
    });

    if (!stores) {
      return next(new Error("Something went wrong"));
    }

    res.status(200).json({
      status: "success",
      result: stores.length,
      data: {
        stores,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
