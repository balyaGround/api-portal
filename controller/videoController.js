const { video } = require("../models");

class Video {
  uploadVideoCtrl = async (req, res, next) => {
    try {
      // if (req.file) {
      //   req.body.file = req.file.path;
      // }
      const newData = await video.create({ file: req.body.file });
      console.log(req.body.file);
      let data = await video.findOne({ _id: newData._id }).select("-_v");

      console.log(data);
      next({
        value: data,
        message: "OK",
        statusCode: 201,
      });
    } catch (error) {
      next(error);
    }
  };

  getVideo = async (req, res, next) => {
    try {
      const data = await video.find().select("-__v");

      if (!data) {
        return next({
          value: "",
          message: "Not Found",
          statusCode: 404,
        });
      }

      next({
        value: data,
        message: "OK",
        statusCode: 201,
      });
    } catch (error) {
      next(error);
    }
  };
}
//bisa dunkssss
//ganti akun git
//tes

module.exports = new Video();
