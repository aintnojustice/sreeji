"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require("webpack-dev-middleware");

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require("webpack-hot-middleware");

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackDevConfig = require("./webpack.dev.config.js");

var config = _interopRequireWildcard(_webpackDevConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(),
    DIST_DIR = _path2.default.join(__dirname, "dist"),
    HTML_FILE = _path2.default.join(DIST_DIR, "index.html"),
    isDevelopment = process.env.NODE_ENV !== "production",
    DEFAULT_PORT = 5000,
    compiler = (0, _webpack2.default)(config);

app.set("port", process.env.PORT || DEFAULT_PORT);

if (isDevelopment) {
    app.use((0, _webpackDevMiddleware2.default)(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use((0, _webpackHotMiddleware2.default)(compiler));

    app.get("*", function (req, res, next) {
        compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
} else {
    app.use(_express2.default.static(DIST_DIR));

    app.get("*", function (req, res) {
        return res.sendFile(HTML_FILE);
    });
}

app.listen(app.get("port"));
