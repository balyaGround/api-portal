const express = require("express");
const route = express.Router();
//import multer
const multer = require("multer");
const { video_upload } = require("../../middlewares/cloudinary");
const upload = multer({ storage: video_upload });
const { getVideo, uploadVideoCtrl } = require("../../controller/videoController");

route.get("/", getVideo);
route.post("/", upload.single("file"), uploadVideoCtrl);
module.exports = route;
