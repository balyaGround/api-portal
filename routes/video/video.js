const express = require("express");
const route = express.Router();
//import multer
const multer = require("multer");
const { video_upload } = require("../../middlewares/cloudinary");
const upload = multer({ storage: video_upload });
const { getVideo, uploadVideoCtrl, delleteAllVideo } = require("../../controller/videoController");
const videoValidator = require("../../middlewares/validator/videoValidator");
const { validatorVideoCtrl } = require("../../middlewares/validator/videoValidator");

route.get("/", getVideo);
route.post("/", validatorVideoCtrl, uploadVideoCtrl);
route.delete("/", delleteAllVideo);
module.exports = route;
