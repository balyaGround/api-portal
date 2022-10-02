const router = require("express").Router();

const { getLog, dellteAllLog } = require("../controller/logsController");

router.get("/", getLog);
router.delete("/", dellteAllLog);
module.exports = router;
