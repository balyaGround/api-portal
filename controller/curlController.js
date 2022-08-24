var request = require("request");

const fs = require("fs");
const path = require("path");

certFile = path.resolve(__dirname, "../cert/VOIP.pem");

class curlController {
  notificationCtrl = async (req, res, next) => {
    try {
      var headers = {
        "apns-topic": "id.ist.flutterWebrtcDemo.voip",
        "apns-push-type": "voip",
      };

      var options = {
        url: "https://api.development.push.apple.com/3/device/b7da7ae53440e3dc7ce7f1cfeef18e345b612487469bbc5d4ab469c16b64e51b",
        method: "POST",
        headers: headers,
        json: {
          aps: { alert: "UWAW KEREN KALI" },
          id: "44d915e1-5ff4-4bed-bf13-c423048ec97a",
          nameCaller: "UWAW",
          handle: "0123456789",
          isVideo: true,
        },
        cert: fs.readFileSync(certFile),
        passphrase: "ist2022",
      };

      const notification = await request(
        options,
        function (error, response, body) {
          console.log(response);
        }
      );

      next({
        value: "OK",
        message: "success",
        statusCode: 200,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = new curlController();
