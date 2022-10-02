const { log } = require("../models");

class logController {
  logCtrl = async (req, res, next) => {
    try {
      let data = await log.create({
        editedBy: req.user.username,
        role: req.user.role,
        body: JSON.stringify(req.body.data),
      });

      next({
        value: req.body.data,
        message: "Created",
        statusCode: 201,
      });
    } catch (error) {
      next(error);
    }
  };

  getLog = async (req, res, next) => {
    try {
      const result = [];
      let data = await log.find().select("-__v");
      let temp;
      data.map((x) => {
        if (x.body) {
          let json = x.body;
          temp = JSON.parse(json);
          console.log(x.body);
          result.push([x, temp]);
        }
      });

      // const json = { status: true, id: "new_id" };
      // res.end(JSON.stringify(json));

      if (!data) {
        return next({
          value: "",
          message: "Not Found",
          statusCode: 404,
        });
      }

      next({
        value: result,
        message: "OK",
        statusCode: 201,
      });
    } catch (error) {
      next(error);
    }
  };

  dellteAllLog = async (req, res, next) => {
    try {
      const result = [];
      let data = await log.deleteMany();

      next({
        value: result,
        message: "OK",
        statusCode: 201,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteLog = async (req, res, next) => {
    try {
      const result = [];
      let data = await log.findByIdAndDelete();

      next({
        value: result,
        message: "OK",
        statusCode: 201,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new logController();
