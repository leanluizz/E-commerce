"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/components/Menu/login.tsx":
/*!***************************************!*\
  !*** ./src/components/Menu/login.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Alerts_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Alerts/error */ \"./src/components/Alerts/error.tsx\");\n/* harmony import */ var _styles_error_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/error.module.css */ \"./src/styles/error.module.css\");\n/* harmony import */ var _styles_error_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_error_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/context */ \"./src/components/Context/context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        mail: \"\",\n        passwd: \"\"\n    });\n    const { header, animationOn, setanimationOn, errorType, seterrorType } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Context_context__WEBPACK_IMPORTED_MODULE_3__.Context);\n    const handleInput = (e)=>{\n        setData({\n            ...Data,\n            [e.target.name]: e.target.value\n        });\n    };\n    if (true) {\n        var _btnXError;\n        const btnXError = document.querySelector(\".x\");\n        (_btnXError = btnXError) === null || _btnXError === void 0 ? void 0 : _btnXError.addEventListener(\"click\", ()=>setanimationOn((_styles_error_module_css__WEBPACK_IMPORTED_MODULE_5___default().errorOFF)));\n    }\n    const Submit = async (e)=>{\n        e.preventDefault();\n        if (true) {\n            let allInputsFilled = true;\n            const input = document.querySelectorAll(\"input\");\n            input.forEach(function(input) {\n                if (input.value == \"\") {\n                    allInputsFilled = false;\n                }\n            });\n            if (!allInputsFilled) {\n                setanimationOn((_styles_error_module_css__WEBPACK_IMPORTED_MODULE_5___default().error));\n                seterrorType(\"Verify the inputs, some input maybe has empty.\");\n            } else {\n                await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://shoesshooting.vercel.app/api/authentication\", Data, header) // https://shoesshooting.vercel.app/api/authentication\n                .then((resp)=>{\n                    if (resp.data == \"PASSWORD NOT FOUND\") {\n                        setanimationOn((_styles_error_module_css__WEBPACK_IMPORTED_MODULE_5___default().error));\n                        seterrorType('Password not found, try again or click in \"forget password?\"');\n                    } else {\n                        location.replace(\"/\");\n                    }\n                }).catch((err)=>{\n                    setanimationOn((_styles_error_module_css__WEBPACK_IMPORTED_MODULE_5___default().error));\n                    seterrorType(\"\".concat(err));\n                    console.log(err);\n                });\n            }\n        }\n    };\n    const Forgoted = async (e)=>{\n        e.preventDefault();\n        if (true) {\n            var _EmailInput, _EmailInput1;\n            const EmailInput = document.querySelector(\".Email\");\n            ((_EmailInput = EmailInput) === null || _EmailInput === void 0 ? void 0 : _EmailInput.value) == \"\" ? (setanimationOn((_styles_error_module_css__WEBPACK_IMPORTED_MODULE_5___default().error)), seterrorType(\"Insert your email for change please\")) : (localStorage.setItem(\"email\", (_EmailInput1 = EmailInput) === null || _EmailInput1 === void 0 ? void 0 : _EmailInput1.value), await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://shoesshooting.vercel.app/api/forgotedPasswd\", Data, header).then((rowCounted)=>rowCounted.data >= 1 ? (localStorage.setItem(\"info\", rowCounted.data), location.replace(\"/forgot-your-password\")) : console.log(\"erro\")));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Alerts_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                animation: animationOn,\n                typeOfError: errorType\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                lineNumber: 67,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: Submit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"exampleInputEmail1\",\n                                className: \"form-label text-light\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Email\",\n                                onChange: handleInput,\n                                name: \"mail\",\n                                type: \"email\",\n                                className: \"form-control Email\",\n                                id: \"exampleInputEmail1\",\n                                \"aria-describedby\": \"emailHelp\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"exampleInputPassword1\",\n                                className: \"form-label text-light\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Password\",\n                                onChange: handleInput,\n                                name: \"passwd\",\n                                type: \"password\",\n                                className: \"form-control\",\n                                id: \"exampleInputPassword1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex flex-column\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"btn btn-danger bg-gradient\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"mt-2 bg-transparent border-0 text-primary\",\n                                onClick: Forgoted,\n                                children: \"Forgot password?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"mt-2 text-center\",\n                                href: \"/register\",\n                                children: \"Dont have a account?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n                lineNumber: 71,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leand\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\E-commerce-principal\\\\src\\\\components\\\\Menu\\\\login.tsx\",\n        lineNumber: 66,\n        columnNumber: 7\n    }, this);\n}\n_s(Login, \"iGPAAL53AVZXlWFZ5NPLBDJwKTg=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0I7Ozs7OzswQ0FDdEUsOERBQUN4QjtnQ0FBTTJCLGFBQVk7Z0NBQVFDLFVBQVUzQztnQ0FBYUcsTUFBSztnQ0FBT3lDLE1BQUs7Z0NBQVFMLFdBQVU7Z0NBQXFCTSxJQUFHO2dDQUFxQkMsb0JBQWlCOzs7Ozs7Ozs7Ozs7a0NBR3JKLDhEQUFDWjt3QkFBSUssV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUF3QkYsV0FBVTswQ0FBd0I7Ozs7OzswQ0FDekUsOERBQUN4QjtnQ0FBTTJCLGFBQVk7Z0NBQVdDLFVBQVUzQztnQ0FBYUcsTUFBSztnQ0FBU3lDLE1BQUs7Z0NBQVdMLFdBQVU7Z0NBQWVNLElBQUc7Ozs7Ozs7Ozs7OztrQ0FFakgsOERBQUNYO3dCQUFJSyxXQUFVOzswQ0FDZiw4REFBQ1E7Z0NBQU9ILE1BQUs7Z0NBQVNMLFdBQVU7MENBQTZCOzs7Ozs7MENBQzdELDhEQUFDUTtnQ0FBT0gsTUFBSztnQ0FBU0wsV0FBVTtnQ0FBNENTLFNBQVNuQjswQ0FBVTs7Ozs7OzBDQUMvRiw4REFBQzdDLGtEQUFJQTtnQ0FBQ3VELFdBQVU7Z0NBQW1CVSxNQUFLOzBDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEQ7R0FqRndCM0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9sb2dpbi50c3g/M2NmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IEVycm9yIGZyb20gJ0AvY29tcG9uZW50cy9BbGVydHMvZXJyb3InXG5pbXBvcnQgRXJyb3JDU1MgZnJvbSAnQC9zdHlsZXMvZXJyb3IubW9kdWxlLmNzcydcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dC9jb250ZXh0XCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKXtcbiAgY29uc3QgW0RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8YW55Pih7XG4gICAgbWFpbDogJycsXG4gICAgcGFzc3dkOiAnJyxcbiAgfSlcbiAgY29uc3Qge2hlYWRlciwgYW5pbWF0aW9uT24sIHNldGFuaW1hdGlvbk9uLCBlcnJvclR5cGUsIHNldGVycm9yVHlwZX0gOiBhbnkgPSB1c2VDb250ZXh0KENvbnRleHQpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0RGF0YSh7Li4uRGF0YSwgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGNvbnN0IGJ0blhFcnJvcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngnKVxuICAgIGJ0blhFcnJvcj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRhbmltYXRpb25PbihFcnJvckNTUy5lcnJvck9GRikpIFxuICB9XG4gIGNvbnN0IFN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgbGV0IGFsbElucHV0c0ZpbGxlZCA9IHRydWVcbiAgICBjb25zdCBpbnB1dDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxuICAgIGlucHV0LmZvckVhY2goZnVuY3Rpb24oaW5wdXQ6IGFueSkge1xuICAgICAgaWYgKGlucHV0LnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgYWxsSW5wdXRzRmlsbGVkID0gZmFsc2U7XG4gICAgICB9XG4gIH0pO1xuICAgIGlmKCFhbGxJbnB1dHNGaWxsZWQpe1xuICAgICAgc2V0YW5pbWF0aW9uT24oRXJyb3JDU1MuZXJyb3IpXG4gICAgICBzZXRlcnJvclR5cGUoJ1ZlcmlmeSB0aGUgaW5wdXRzLCBzb21lIGlucHV0IG1heWJlIGhhcyBlbXB0eS4nKVxuICB9ZWxzZXtcbiAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovL3Nob2Vzc2hvb3RpbmcudmVyY2VsLmFwcC9hcGkvYXV0aGVudGljYXRpb24nLCBEYXRhLCBoZWFkZXIpIC8vIGh0dHBzOi8vc2hvZXNzaG9vdGluZy52ZXJjZWwuYXBwL2FwaS9hdXRoZW50aWNhdGlvblxuICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgaWYocmVzcC5kYXRhID09ICdQQVNTV09SRCBOT1QgRk9VTkQnKXtcbiAgICAgICAgc2V0YW5pbWF0aW9uT24oRXJyb3JDU1MuZXJyb3IpXG4gICAgICAgIHNldGVycm9yVHlwZSgnUGFzc3dvcmQgbm90IGZvdW5kLCB0cnkgYWdhaW4gb3IgY2xpY2sgaW4gXCJmb3JnZXQgcGFzc3dvcmQ/XCInKSAgICBcbiAgICAgIH1lbHNle1xuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvJykgICAgIFxuICAgICAgfVxuICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgc2V0YW5pbWF0aW9uT24oRXJyb3JDU1MuZXJyb3IpXG4gICAgICAgIHNldGVycm9yVHlwZShgJHtlcnJ9YCkgICBcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH0pXG59XG59XG4gIH1cbiAgY29uc3QgRm9yZ290ZWQgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgY29uc3QgRW1haWxJbnB1dDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5FbWFpbFwiKVxuICAgICAgRW1haWxJbnB1dD8udmFsdWUgPT0gJycgPyAoc2V0YW5pbWF0aW9uT24oRXJyb3JDU1MuZXJyb3IpLCBzZXRlcnJvclR5cGUoJ0luc2VydCB5b3VyIGVtYWlsIGZvciBjaGFuZ2UgcGxlYXNlJykpIDogXG4gICAgICAoIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbWFpbCcsIEVtYWlsSW5wdXQ/LnZhbHVlKVxuICAgICAgICAsYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9zaG9lc3Nob290aW5nLnZlcmNlbC5hcHAvYXBpL2ZvcmdvdGVkUGFzc3dkJywgRGF0YSwgaGVhZGVyKVxuICAgICAgLnRoZW4ocm93Q291bnRlZCA9PiByb3dDb3VudGVkLmRhdGEgPj0gMSA/IChsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5mbycsIHJvd0NvdW50ZWQuZGF0YSksbG9jYXRpb24ucmVwbGFjZSgnL2ZvcmdvdC15b3VyLXBhc3N3b3JkJykpIDogY29uc29sZS5sb2coJ2Vycm8nKSlcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICAgPEVycm9yIFxuICAgICAgYW5pbWF0aW9uPXthbmltYXRpb25Pbn1cbiAgICAgIHR5cGVPZkVycm9yPXtlcnJvclR5cGV9Lz4gXG5cbjxmb3JtIG9uU3VibWl0PXtTdWJtaXR9PlxuPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHRleHQtbGlnaHRcIj5FbWFpbDwvbGFiZWw+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRW1haWxcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXR9IG5hbWU9XCJtYWlsXCIgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIEVtYWlsXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgLz5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHRleHQtbGlnaHRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXR9IG5hbWU9XCJwYXNzd2RcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uJz5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYmctZ3JhZGllbnRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPSdtdC0yIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIHRleHQtcHJpbWFyeScgb25DbGljaz17Rm9yZ290ZWR9PkZvcmdvdCBwYXNzd29yZD88L2J1dHRvbj5cbiAgPExpbmsgY2xhc3NOYW1lPSdtdC0yIHRleHQtY2VudGVyJyBocmVmPScvcmVnaXN0ZXInPkRvbnQgaGF2ZSBhIGFjY291bnQ/PC9MaW5rPlxuICA8L2Rpdj5cbjwvZm9ybT4gXG48L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiTGluayIsIkVycm9yIiwiRXJyb3JDU1MiLCJDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiTG9naW4iLCJEYXRhIiwic2V0RGF0YSIsIm1haWwiLCJwYXNzd2QiLCJoZWFkZXIiLCJhbmltYXRpb25PbiIsInNldGFuaW1hdGlvbk9uIiwiZXJyb3JUeXBlIiwic2V0ZXJyb3JUeXBlIiwiaGFuZGxlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJvY2VzcyIsImJyb3dzZXIiLCJidG5YRXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXJyb3JPRkYiLCJTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFsbElucHV0c0ZpbGxlZCIsImlucHV0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlcnJvciIsInBvc3QiLCJ0aGVuIiwicmVzcCIsImRhdGEiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJGb3Jnb3RlZCIsIkVtYWlsSW5wdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicm93Q291bnRlZCIsImRpdiIsImFuaW1hdGlvbiIsInR5cGVPZkVycm9yIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInR5cGUiLCJpZCIsImFyaWEtZGVzY3JpYmVkYnkiLCJidXR0b24iLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/login.tsx\n"));

/***/ })

});