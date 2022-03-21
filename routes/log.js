const router = require("express").Router();

const { getLog } = require("../controller/logsController");

router.get("/", getLog);

module.exports = router;
