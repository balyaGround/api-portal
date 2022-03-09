const express = require("express");
const route = express.Router();

const { admin } = require("../../middlewares/auth");

const { getParameter, updateParameterCtrl } = require("../../controller/parameterController");

const { logCtrl } = require("../../controller/logsController");
//ayooo ini apa yaaa
const { updateParameterVldt, updateTitleVldt, updateScheduleAttrVldt } = require("../../middlewares/validator/parameterValidator");

route.get("/", getParameter);
route.post("/", admin, updateParameterVldt, updateParameterCtrl, logCtrl);
route.post("/title", admin, updateTitleVldt, updateParameterCtrl, logCtrl);
route.post("/attributes", admin, updateScheduleAttrVldt, updateParameterCtrl, logCtrl);

module.exports = route;
