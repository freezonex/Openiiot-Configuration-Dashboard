// server.js
const express = require("express");
const next = require("next");
const proxyMiddleware = require("http-proxy-middleware");

const apiUrl =
  process.env.NEXT_PUBLIC_DOMAIN_ENV === "development"
    ? "http://localhost"
    : "http://openiiot-consolemanager-service.openiiot";
const serverPort = 8085;
console.log("API URL:", `${apiUrl}:${serverPort}`);
const devProxy = {
  "/suposapi": {
    target: `${apiUrl}:${serverPort}`, // 端口自己配置合适的
    pathRewrite: {
      "^/suposapi": "/",
    },
    changeOrigin: true,
  },
};

const port = parseInt(process.env.PORT, 10) || 81;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(
          context,
          proxyMiddleware.createProxyMiddleware(devProxy[context])
        );
      });
    }

    server.all("*", (req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on ${apiUrl}:${port}`);
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
