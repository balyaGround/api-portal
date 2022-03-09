const router = require("express").Router();

// import auth
const { signin, admin, supervisor } = require("../middlewares/auth");

//import validator
const { signinVldt } = require("../middlewares/validator/authValidator");

//import controler
const { GetTokenCtrl, signUpCtrl, getUsrCtrl } = require("../controller/authController");

router.post("/login", signinVldt, signin, GetTokenCtrl);

//this is for development
router.post("/signup", signUpCtrl);
router.get("/getuser", admin || supervisor, getUsrCtrl);
module.exports = router;
