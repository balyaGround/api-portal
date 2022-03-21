const router = require("express").Router();

// import auth
const { signin, admin, supervisor } = require("../middlewares/auth");

//import validator
const { signinVldt } = require("../middlewares/validator/authValidator");

//import controler
const { GetTokenCtrl, signUpCtrl, getUsrCtrl, checkJwt, getUserController } = require("../controller/authController");

router.post("/login", signinVldt, signin, GetTokenCtrl);

//this is for development
router.get("/getUser", supervisor, getUserController);
router.post("/signup", signUpCtrl);
router.get("/admin", admin, getUsrCtrl);
router.get("/supervisor", supervisor, getUsrCtrl);
module.exports = router;
