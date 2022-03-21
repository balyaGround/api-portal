const jwt = require("jsonwebtoken");
// const { Op } = require("sequelize");
const { user } = require("../models");

class AuthController {
  //this for setup
  signUpCtrl = async (req, res, next) => {
    try {
      const newData = await user.create(req.body);
      const data = await user.findOne({
        where: { id: newData.id },
      });

      next({ value: newData, message: "OK", statusCode: 201 });
    } catch (error) {
      next(error);
    }
  };

  getUserController = async (req, res, next) => {
    try {
      const data = await user.find({});

      next({ value: data, message: "OK", statusCode: 201 });
    } catch (error) {
      next(error);
    }
  };

  GetTokenCtrl = async (req, res, next) => {
    try {
      const identity = {
        user: req.user.id,
        username: req.user.username,
        role: req.user.role,
      };

      const token = await jwt.sign(identity, process.env.JWT_SECRET, {
        expiresIn: "48h",
      });

      next({
        value: { id: req.user.id, username: req.user.username, role: req.user.role, token },
        message: "OK",
        statusCode: 200,
      });
    } catch (error) {
      next(error);
    }
  };

  getUsrCtrl = async (req, res, next) => {
    try {
      const data = await user.findOne({ username: req.user.username });
      next({
        value: data,
        message: "OK",
        statusCode: 200,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new AuthController();
