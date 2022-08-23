class healthController {
  healthCtrl = async (req, res, next) => {
    try {
      next({
        value: "",
        message: "OK",
        statusCode: 200,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new healthController();
