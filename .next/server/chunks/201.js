exports.id = 201;
exports.ids = [201];
exports.modules = {

/***/ 7350:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "menu_menu__mvSid",
	"divButton": "menu_divButton__dYdOg"
};


/***/ }),

/***/ 8201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ menu)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./src/styles/menu.module.css
var menu_module = __webpack_require__(7350);
var menu_module_default = /*#__PURE__*/__webpack_require__.n(menu_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/img/Menu/Hopstarter-Van-Slip-Ons-Vans-Checkerboard-Dirty-White.256.png
/* harmony default export */ const Hopstarter_Van_Slip_Ons_Vans_Checkerboard_Dirty_White_256 = ({"src":"/_next/static/media/Hopstarter-Van-Slip-Ons-Vans-Checkerboard-Dirty-White.256.05c1f885.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyUlEQVR42mNABrExIUxVlXmMDOjg////jNeu7meD8detncM6fVoXS1VlOSPDiaPbWJHU6lZWFokyIIM5c7pSTp3cuO39u3PhixdNvdjVWfNy8sSatrzc0KDAAC9RhoVzZ0++eOHE/+fPbvw/cnjf/507tvw/emTf/1Onjv3fvXvXUoblS5YaHz9+OnvTpp0lO3furj98+EjDhQuXSw8ePJxTXV1jwkAQLF60iOnKlSusQMxy6dIl1qtXr7Lev3+f5ciRI6xVVVVMAN/QYqlceeyYAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Menu/menu.tsx






function menu({ colortitle }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-100",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: " flex-start d-md-flex align-items-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        width: 100,
                        className: (menu_module_default()).icon,
                        src: Hopstarter_Van_Slip_Ons_Vans_Checkerboard_Dirty_White_256,
                        alt: "iconMenu"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    className: "link-offset-2 link-underline link-underline-opacity-0",
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        id: "titleSS",
                        className: `fs-4 ${colortitle} fw-lighter`,
                        children: "ShoesShooting"
                    })
                })
            ]
        })
    });
}


/***/ })

};
;