"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_dev_Documents_code_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_dev_Documents_code_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_dev_Documents_code_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ \"./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\nfunction PostTemplate(param) {\n    var content = param.content, data = param.data;\n    // This holds the data between `---` from the .md file\n    var frontmatter = data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: \"https://xn4dxyaid5lopieoqn3zr5pmume2bdjj56mlewlajof7dn2x4eva.arweave.net/u3g74AgfVuegjoN3mPXsowmgjSnvmLJZYEuL8bdX4So\",\n                width: 288,\n                height: 323\n            }, void 0, false, {\n                fileName: \"/home/dev/Documents/code/blog/pages/posts/[slug].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: frontmatter.title\n            }, void 0, false, {\n                fileName: \"/home/dev/Documents/code/blog/pages/posts/[slug].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \"markdown-content\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/home/dev/Documents/code/blog/pages/posts/[slug].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = PostTemplate;\nPostTemplate.getInitialProps = function() {\n    var _ref = _asyncToGenerator(_home_dev_Documents_code_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var slug, content, data;\n        return _home_dev_Documents_code_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    slug = context.query.slug;\n                    _ctx.next = 3;\n                    return __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(\"./\".concat(slug, \".md\"));\n                case 3:\n                    content = _ctx.sent;\n                    data = gray_matter__WEBPACK_IMPORTED_MODULE_3__(content.default);\n                    return _ctx.abrupt(\"return\", _objectSpread({}, data));\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(context) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostTemplate);\nvar _c;\n$RefreshReg$(_c, \"PostTemplate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ0s7QUFFM0MsU0FBU0csWUFBWSxDQUFDLEtBQWlCLEVBQUU7UUFBakJDLE9BQU8sR0FBVCxLQUFpQixDQUFmQSxPQUFPLEVBQUVDLElBQUksR0FBZixLQUFpQixDQUFOQSxJQUFJO0lBQ25DLHNEQUFzRDtJQUN0RCxJQUFNQyxXQUFXLEdBQUdELElBQUk7SUFFeEIscUJBQ0U7OzBCQUNFLDhEQUFDRSxLQUFHO2dCQUNGQyxHQUFHLEVBQ0Qsc0hBQXNIO2dCQUV4SEMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7OztvQkFDWDswQkFDRiw4REFBQ0MsSUFBRTswQkFBRUwsV0FBVyxDQUFDTSxLQUFLOzs7OztvQkFBTTswQkFDNUIsOERBQUNWLHNEQUFhO2dCQUFDVyxTQUFTLEVBQUMsa0JBQWtCOzBCQUFFVCxPQUFPOzs7OztvQkFBaUI7O29CQUNwRSxDQUNIO0NBQ0g7QUFqQlFELEtBQUFBLFlBQVk7QUFtQnJCQSxZQUFZLENBQUNXLGVBQWU7ZUFBRyw0S0FBT0MsT0FBTyxFQUFLO1lBQ3hDQyxJQUFJLEVBR05aLE9BQU8sRUFHUEMsSUFBSTs7OztvQkFOSixJQUFNLEdBQUtVLE9BQU8sQ0FBQ0UsS0FBSyxDQUF0QkQsSUFBSSxDQUFtQjs7MkJBR1QsZ0VBQU8sSUFBZSxDQUFPLE1BQUcsQ0FBUkEsSUFBSSxFQUFDLEtBQUcsQ0FBQyxDQUFDOztvQkFBbERaLE9BQU8sWUFBMkM7b0JBR2xEQyxJQUFJLEdBQUdKLHdDQUFNLENBQUNHLE9BQU8sQ0FBQ2MsT0FBTyxDQUFDLENBQUM7aURBRzlCLGtCQUFLYixJQUFJLENBQUU7Ozs7OztLQUduQjtvQkFicUNVLE9BQU87OztHQWE1QyxDQUFDO0FBRUYsK0RBQWVaLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuZnVuY3Rpb24gUG9zdFRlbXBsYXRlKHsgY29udGVudCwgZGF0YSB9KSB7XG4gIC8vIFRoaXMgaG9sZHMgdGhlIGRhdGEgYmV0d2VlbiBgLS0tYCBmcm9tIHRoZSAubWQgZmlsZVxuICBjb25zdCBmcm9udG1hdHRlciA9IGRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e1xuICAgICAgICAgIFwiaHR0cHM6Ly94bjRkeHlhaWQ1bG9waWVvcW4zenI1cG11bWUyYmRqajU2bWxld2xham9mN2RuMng0ZXZhLmFyd2VhdmUubmV0L3UzZzc0QWdmVnVlZ2pvTjNtUFhzb3dtZ2pTbnZtTEpaWUV1TDhiZFg0U29cIlxuICAgICAgICB9XG4gICAgICAgIHdpZHRoPXsyODh9XG4gICAgICAgIGhlaWdodD17MzIzfVxuICAgICAgLz5cbiAgICAgIDxoMT57ZnJvbnRtYXR0ZXIudGl0bGV9PC9oMT5cbiAgICAgIDxSZWFjdE1hcmtkb3duIGNsYXNzTmFtZT1cIm1hcmtkb3duLWNvbnRlbnRcIj57Y29udGVudH08L1JlYWN0TWFya2Rvd24+XG4gICAgPC8+XG4gICk7XG59XG5cblBvc3RUZW1wbGF0ZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IGNvbnRleHQucXVlcnk7XG5cbiAgLy8gSW1wb3J0IG91ciAubWQgZmlsZSB1c2luZyB0aGUgYHNsdWdgIGZyb20gdGhlIFVSTFxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9jb250ZW50LyR7c2x1Z30ubWRgKTtcblxuICAvLyBQYXJzZSAubWQgZGF0YSB0aHJvdWdoIGBtYXR0ZXJgXG4gIGNvbnN0IGRhdGEgPSBtYXR0ZXIoY29udGVudC5kZWZhdWx0KTtcblxuICAvLyBQYXNzIGRhdGEgdG8gb3VyIGNvbXBvbmVudCBwcm9wc1xuICByZXR1cm4geyAuLi5kYXRhIH07XG5cbiAgcmV0dXJuIHsgc2x1ZyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdFRlbXBsYXRlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWF0dGVyIiwiUmVhY3RNYXJrZG93biIsIlBvc3RUZW1wbGF0ZSIsImNvbnRlbnQiLCJkYXRhIiwiZnJvbnRtYXR0ZXIiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwidGl0bGUiLCJjbGFzc05hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsInF1ZXJ5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ })

});