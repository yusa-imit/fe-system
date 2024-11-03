"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([["entry-client"],{

/***/ "../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js":
/*!***********************************************************************************************!*\
  !*** ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function(c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function(c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js?");

/***/ }),

/***/ "webpack/container/entry/polaris_app":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var moduleMap = {\n\t\"./anyModule\": () => {\n\t\treturn Promise.all(/*! __federation_expose_anyModule */[__webpack_require__.e(\"vendors-node_modules_pnpm_react_18_3_1_node_modules_react_jsx-dev-runtime_js\"), __webpack_require__.e(\"webpack_sharing_consume_default_react_react-_f0d8\"), __webpack_require__.e(\"__federation_expose_anyModule\")]).then(() => (() => ((__webpack_require__(/*! ./modules/anyModule.tsx */ \"./modules/anyModule.tsx\")))));\n\t}\n};\nvar get = (module, getScope) => {\n\t__webpack_require__.R = getScope;\n\tgetScope = (\n\t\t__webpack_require__.o(moduleMap, module)\n\t\t\t? moduleMap[module]()\n\t\t\t: Promise.resolve().then(() => {\n\t\t\t\tthrow new Error('Module \"' + module + '\" does not exist in container.');\n\t\t\t})\n\t);\n\t__webpack_require__.R = undefined;\n\treturn getScope;\n};\nvar init = (shareScope, initScope, remoteEntryInitOptions) => {\n\treturn __webpack_require__.federation.bundlerRuntime.initContainerEntry({\twebpackRequire: __webpack_require__,\n\t\tshareScope: shareScope,\n\t\tinitScope: initScope,\n\t\tremoteEntryInitOptions: remoteEntryInitOptions,\n\t\tshareScopeKey: \"default\"\n\t})\n};\n\n__webpack_require__(/*! ./node_modules/.federation/entry.5887b7e08de1c0b7b3d2dc801b1f1886.js */ \"./node_modules/.federation/entry.5887b7e08de1c0b7b3d2dc801b1f1886.js\")\n\n// This exports getters to disallow modifications\n__webpack_require__.d(exports, {\n\tget: () => (get),\n\tinit: () => (init)\n});\n\n//# sourceURL=webpack://playground/container_entry?");

/***/ }),

/***/ "../../packages/core/dist/loaders/webpack-hot-middleware-client-inline.cjs":
/*!*********************************************************************************!*\
  !*** ../../packages/core/dist/loaders/webpack-hot-middleware-client-inline.cjs ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst _commonjsHelpers = __webpack_require__(/*! ../shared/core.facfc6d6.cjs */ \"../../packages/core/dist/shared/core.facfc6d6.cjs\");\nconst require$$0 = __webpack_require__(/*! webpack-hot-middleware/client */ \"../../node_modules/.pnpm/webpack-hot-middleware@2.26.1/node_modules/webpack-hot-middleware/client.js\");\n\nfunction _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }\n\nconst require$$0__default = /*#__PURE__*/_interopDefaultCompat(require$$0);\n\nvar webpackHotMiddlewareClientInline = require$$0__default;\n\nconst webpackHotMiddlewareClientInline$1 = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(webpackHotMiddlewareClientInline);\n\nmodule.exports = webpackHotMiddlewareClientInline$1;\n\n\n//# sourceURL=webpack://playground/../../packages/core/dist/loaders/webpack-hot-middleware-client-inline.cjs?");

/***/ }),

/***/ "../../packages/core/dist/runtime/entry-client.cjs":
/*!*********************************************************!*\
  !*** ../../packages/core/dist/runtime/entry-client.cjs ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst client = __webpack_require__(/*! react-dom/client */ \"../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js\");\n\nif (typeof window !== \"undefined\" && typeof document !== \"undefined\") {\n  const init = async () => {\n    const pattern = window.__PAGE_PATTERN__;\n    const props = window.__INITIAL_PROPS__;\n    const root = document.getElementById(\"root\");\n    try {\n      const pageModule = await Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'undefined'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n      const PageComponent = pageModule.default;\n      if (props) {\n        client.hydrateRoot(root, /* @__PURE__ */ React.createElement(PageComponent, { ...props }));\n      } else {\n        client.createRoot(root).render(/* @__PURE__ */ React.createElement(PageComponent, null));\n      }\n    } catch (error) {\n      console.error(\"Error loading page component:\", error);\n    }\n  };\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", init);\n  } else {\n    init();\n  }\n}\n\n\n//# sourceURL=webpack://playground/../../packages/core/dist/runtime/entry-client.cjs?");

/***/ }),

/***/ "../../packages/core/dist/shared/core.facfc6d6.cjs":
/*!*********************************************************!*\
  !*** ../../packages/core/dist/shared/core.facfc6d6.cjs ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction getDefaultExportFromCjs (x) {\n\treturn x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;\n}\n\nexports.getDefaultExportFromCjs = getDefaultExportFromCjs;\n\n\n//# sourceURL=webpack://playground/../../packages/core/dist/shared/core.facfc6d6.cjs?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_federation_entry_5887b7e08de1c0b7b3d2dc801b1f1886_js-node_modules_pnpm_w-30a5c0","webpack_sharing_provide_default_react-dom-webpack_sharing_provide_default_react"], () => (__webpack_exec__("./node_modules/.federation/entry.5887b7e08de1c0b7b3d2dc801b1f1886.js"), __webpack_exec__("../../packages/core/dist/loaders/webpack-hot-middleware-client-inline.cjs"), __webpack_exec__("../../packages/core/dist/runtime/entry-client.cjs")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);