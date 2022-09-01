const express = require("express");
const route = express.Router();

const { notificationCtrl } = require("../controller/curlController");

route.get("/:token", notificationCtrl);
module.exports = route;
//aloooo
