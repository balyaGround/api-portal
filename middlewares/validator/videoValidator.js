const path = require("path");
const crypto = require("crypto");
const { promisify } = require("util");
class VideoValidator {
  validatorVideoCtrl = async (req, res, next) => {
    try {
      const errorMessages = [];
      if (req.files) {
        // req.files.image is come from key (file) in postman
        const file = req.files.file;
        const videotype = ["video/x-matroska", "video/mp4", "video/webm"];
        let result = false;
        videotype.map((x) => {
          if (result == false) {
            if (!file.mimetype.startsWith(x)) {
              result = false;
            } else {
              result = true;
            }
          }
        });
        // Make sure image is photo
        if (result == false) {
          errorMessages.push("File must be an Video");
        }

        // If error
        if (errorMessages.length > 0) {
          return next({
            message: errorMessages,
            error: "Bad request",
            statusCode: 400,
          });
        }

        // Create custom filename
        let fileName = crypto.randomBytes(16).toString("hex");

        // Rename the file
        file.name = `${fileName}${path.parse(file.name).ext}`;
        console.log("inii");
        // Make file.mv to promise
        const move = promisify(file.mv);

        // Upload image to /public/images
        await move(`./public/video/${file.name}`);

        req.body.file = `https://api-portal.herokuapp.com/public/video/${file.name}`;
      }
      next();
      //   if (req.file) {
      //     req.body.file = req.file.path;
      //   }
      //   const newData = await video.create({ file: req.body.file });
      //   console.log(req.body.file);
      //   let data = await video.findOne({ _id: newData._id }).select("-_v");

      //   console.log(data);
      //   next({
      //     value: data,
      //     message: "OK",
      //     statusCode: 201,
      //   });
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

module.exports = new VideoValidator();
