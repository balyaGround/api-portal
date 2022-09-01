const http2 = require("http2");
const fs = require("fs");
const path = require("path");

class curlController {
  notificationCtrl = async (req, res, next) => {
    try {
      const tokenIos = req.params.token;
      const host = "https://api.sandbox.push.apple.com";
      const path = `/3/device/${tokenIos}`;
      //
      // b7da7ae53440e3dc7ce7f1cfeef18e345b612487469bbc5d4ab469c16b64e51b
      const client = http2.connect(host, {
        key: fs.readFileSync(__dirname + "/cert/VOIP.key.pem"),
        cert: fs.readFileSync(__dirname + "/cert/VOIP.crt.pem"),
      });

      client.on("error", (err) => console.error(err));

      const body = {
        // aps: {
        //   alert: "hello",
        //   "content-available": 1,
        // },
        aps: { alert: "UWAW KEREN KALI" },
        id: "44d915e1-5ff4-4bed-bf13-c423048ec97a",
        nameCaller: "Bank IST",
        handle: "0123456789",
        isVideo: true,
      };

      const headers = {
        ":method": "POST",
        "apns-topic": "id.ist.flutterWebrtcDemo.voip",
        "apns-push-type": "voip",
        ":scheme": "https",
        ":path": path,
      };

      const request = client.request(headers);

      request.on("response", (headers, flags) => {
        for (const name in headers) {
          console.log(`${name}: ${headers[name]}`);
        }
      });

      request.setEncoding("utf8");

      let data = "";
      request.on("data", (chunk) => {
        data += chunk;
      });
      request.write(JSON.stringify(body));
      request.on("end", () => {
        console.log(`\n${data}`);
        client.close();
      });
      request.end();

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
