const { curly } = require("node-libcurl");
const path = require("path");
const tls = require("tls");
const fs = require("fs");

const certFilePath = path.join("./cert/VOIP.pem");
const tlsData = tls.rootCertificates.join("\n");
fs.writeFileSync(certFilePath, tlsData);

class curlController {
  notificationCtrl = async (req, res, next) => {
    try {
      console.log("ini file cert --> ", certFilePath);

      const payload = {
        postFields: JSON.stringify({
          aps: { alert: "UWAW KEREN KALI" },
          id: "44d915e1-5ff4-4bed-bf13-c423048ec97a",
          nameCaller: "UWAW",
          handle: "0123456789",
          isVideo: true,
        }),
        httpHeader: [
          "apns-topic: id.ist.flutterWebrtcDemo.voip",
          "apns-push-type: voip",
        ],
        caInfo: certFilePath + "ist2022",
        verbose: true,
      };

      console.log("Payload --> ", payload);
      const { data } = await curly.post(
        "https://api.development.push.apple.com/3/device/b7da7ae53440e3dc7ce7f1cfeef18e345b612487469bbc5d4ab469c16b64e51b",
        payload
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
