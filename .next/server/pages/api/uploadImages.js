"use strict";
(() => {
var exports = {};
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 9948:
/***/ ((module) => {

module.exports = require("dotenv-safe");

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

/***/ 4475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2FuploadImages_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FuploadImages_tsx_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/uploadImages.tsx
var uploadImages_namespaceObject = {};
__webpack_require__.r(uploadImages_namespaceObject);
__webpack_require__.d(uploadImages_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: external "pg"
var external_pg_ = __webpack_require__(5900);
var external_pg_default = /*#__PURE__*/__webpack_require__.n(external_pg_);
// EXTERNAL MODULE: external "dotenv-safe"
var external_dotenv_safe_ = __webpack_require__(9948);
var external_dotenv_safe_default = /*#__PURE__*/__webpack_require__.n(external_dotenv_safe_);
;// CONCATENATED MODULE: ./src/pages/api/uploadImages.tsx


async function handler(req, res) {
    external_dotenv_safe_default().config();
    const { Pool } = (external_pg_default());
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL + "?sslmode=require"
    });
    console.log(req);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FuploadImages&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2FuploadImages.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2FuploadImages_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2FuploadImages_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(uploadImages_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(uploadImages_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/uploadImages",
        pathname: "/api/uploadImages",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: uploadImages_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(4475)));
module.exports = __webpack_exports__;

})();