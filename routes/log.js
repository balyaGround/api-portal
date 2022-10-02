const router = require("express").Router();

const { getLog, dellteAllLog, deleteLog } = require("../controller/logsController");

router.get("/", getLog);
router.delete("/", dellteAllLog);
router.delete("/:id", deleteLog);
module.exports = router;
