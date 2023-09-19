"use strict";
(() => {
var exports = {};
exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 9948:
/***/ ((module) => {

module.exports = require("dotenv-safe");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 5900:
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ 3610:
/***/ ((module) => {

module.exports = import("@vercel/postgres");;

/***/ }),

/***/ 564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routeModule: () => (/* binding */ routeModule)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7153);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7305);
/* harmony import */ var private_next_pages_api_authentication_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_authentication_tsx__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_authentication_tsx__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_authentication_tsx__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_authentication_tsx__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/authentication",
        pathname: "/api/authentication",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_authentication_tsx__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_safe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9948);
/* harmony import */ var dotenv_safe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_safe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vercel_postgres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3610);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5900);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_postgres__WEBPACK_IMPORTED_MODULE_2__]);
_vercel_postgres__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







async function handler(req, res) {
    dotenv_safe__WEBPACK_IMPORTED_MODULE_1___default().config();
    (cookie__WEBPACK_IMPORTED_MODULE_5___default().parse);
    const { Pool } = (pg__WEBPACK_IMPORTED_MODULE_3___default());
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL + "?sslmode=require"
    });
    const passwdCrypted = await _vercel_postgres__WEBPACK_IMPORTED_MODULE_2__.sql.query(`SELECT password from Users WHERE email = '${req.body.mail}';`) // Get password of users
    ;
    //Desencrypt password for brcrypt compare the password sended with database
    const desencrypt = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(req.body.passwd, passwdCrypted.rows[0].password.split(/\s+/).join("")) // Regex delete whitespaces
    ;
    const authenticate = await _vercel_postgres__WEBPACK_IMPORTED_MODULE_2__.sql.query(`SELECT email, password from Users WHERE email = '${req.body.mail}' AND password = '${desencrypt ? passwdCrypted.rows[0].password.split(/\s+/).join("") : undefined}';`);
    const { rowCount } = authenticate;
    const idQuery = await _vercel_postgres__WEBPACK_IMPORTED_MODULE_2__.sql.query(`SELECT id from Users WHERE email = '${req.body.mail}'`);
    const id = idQuery.rows[0].id;
    if (!rowCount) {
        res.send("PASSWORD NOT FOUND") // FAIL
        ;
    } else {
        let token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
            id
        }, process.env.SECRET + "?sslmode=require", {
            expiresIn: 10800
        });
        // Define o cookie HTTP-only
        const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_5__.serialize)("token", token, {
            httpOnly: true,
            maxAge: 10800,
            path: "/"
        });
        res.setHeader("Set-Cookie", cookie);
        res.send("Sucess!"); // SUCCESS
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(564)));
module.exports = __webpack_exports__;

})();