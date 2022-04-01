/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./content lazy recursive ^\\.\\/.*\\.md$":
/*!*****************************************************!*\
  !*** ./content/ lazy ^\.\/.*\.md$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dofus.md": [
		"./content/dofus.md",
		"content_dofus_md"
	],
	"./the-code.md": [
		"./content/the-code.md",
		"content_the-code_md"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./content lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_3__]);\nreact_markdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction PostTemplate({ content , data  }) {\n    // This holds the data between `---` from the .md file\n    const frontmatter = data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://xn4dxyaid5lopieoqn3zr5pmume2bdjj56mlewlajof7dn2x4eva.arweave.net/u3g74AgfVuegjoN3mPXsowmgjSnvmLJZYEuL8bdX4So\",\n                        width: 222,\n                        height: 222,\n                        style: {\n                            borderRadius: \"50%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Documents/code/blog/pages/posts/[slug].js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: frontmatter.title\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Documents/code/blog/pages/posts/[slug].js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Documents/code/blog/pages/posts/[slug].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"markdown-content\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/home/dev/Documents/code/blog/pages/posts/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nPostTemplate.getInitialProps = async (context)=>{\n    const { slug  } = context.query;\n    // Import our .md file using the `slug` from the URL\n    const content = await __webpack_require__(\"./content lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(`./${slug}.md`);\n    // Parse .md data through `matter`\n    const data = gray_matter__WEBPACK_IMPORTED_MODULE_2__(content.default);\n    // Pass data to our component props\n    return {\n        ...data\n    };\n    return {\n        slug\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTemplate);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNZO0FBQ0s7QUFFM0MsU0FBU0csWUFBWSxDQUFDLEVBQUVDLE9BQU8sR0FBRUMsSUFBSSxHQUFFLEVBQUU7SUFDdkMsc0RBQXNEO0lBQ3RELE1BQU1DLFdBQVcsR0FBR0QsSUFBSTtJQUV4QixxQkFDRTs7MEJBQ0UsOERBQUNFLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxRQUFROztrQ0FDckIsOERBQUNDLEtBQUc7d0JBQ0ZDLEdBQUcsRUFDRCxzSEFBc0g7d0JBRXhIQyxLQUFLLEVBQUUsR0FBRzt3QkFDVkMsTUFBTSxFQUFFLEdBQUc7d0JBQ1hDLEtBQUssRUFBRTs0QkFBRUMsWUFBWSxFQUFFLEtBQUs7eUJBQUU7Ozs7OzRCQUM5QjtrQ0FDRiw4REFBQ0MsSUFBRTtrQ0FBRVQsV0FBVyxDQUFDVSxLQUFLOzs7Ozs0QkFBTTs7Ozs7O29CQUN4QjswQkFDTiw4REFBQ2Qsc0RBQWE7Z0JBQUNNLFNBQVMsRUFBQyxrQkFBa0I7MEJBQUVKLE9BQU87Ozs7O29CQUFpQjs7b0JBQ3BFLENBQ0g7Q0FDSDtBQUVERCxZQUFZLENBQUNjLGVBQWUsR0FBRyxPQUFPQyxPQUFPLEdBQUs7SUFDaEQsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR0QsT0FBTyxDQUFDRSxLQUFLO0lBRTlCLG9EQUFvRDtJQUNwRCxNQUFNaEIsT0FBTyxHQUFHLE1BQU0sZ0VBQU8sR0FBZSxFQUFFZSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRXhELGtDQUFrQztJQUNsQyxNQUFNZCxJQUFJLEdBQUdKLHdDQUFNLENBQUNHLE9BQU8sQ0FBQ2lCLE9BQU8sQ0FBQztJQUVwQyxtQ0FBbUM7SUFDbkMsT0FBTztRQUFFLEdBQUdoQixJQUFJO0tBQUUsQ0FBQztJQUVuQixPQUFPO1FBQUVjLElBQUk7S0FBRSxDQUFDO0NBQ2pCLENBQUM7QUFFRixpRUFBZWhCLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuZnVuY3Rpb24gUG9zdFRlbXBsYXRlKHsgY29udGVudCwgZGF0YSB9KSB7XG4gIC8vIFRoaXMgaG9sZHMgdGhlIGRhdGEgYmV0d2VlbiBgLS0tYCBmcm9tIHRoZSAubWQgZmlsZVxuICBjb25zdCBmcm9udG1hdHRlciA9IGRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICBcImh0dHBzOi8veG40ZHh5YWlkNWxvcGllb3FuM3pyNXBtdW1lMmJkamo1Nm1sZXdsYWpvZjdkbjJ4NGV2YS5hcndlYXZlLm5ldC91M2c3NEFnZlZ1ZWdqb04zbVBYc293bWdqU252bUxKWllFdUw4YmRYNFNvXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgd2lkdGg9ezIyMn1cbiAgICAgICAgICBoZWlnaHQ9ezIyMn1cbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGgxPntmcm9udG1hdHRlci50aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8UmVhY3RNYXJrZG93biBjbGFzc05hbWU9XCJtYXJrZG93bi1jb250ZW50XCI+e2NvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxuICAgIDwvPlxuICApO1xufVxuXG5Qb3N0VGVtcGxhdGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xuXG4gIC8vIEltcG9ydCBvdXIgLm1kIGZpbGUgdXNpbmcgdGhlIGBzbHVnYCBmcm9tIHRoZSBVUkxcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGltcG9ydChgLi4vLi4vY29udGVudC8ke3NsdWd9Lm1kYCk7XG5cbiAgLy8gUGFyc2UgLm1kIGRhdGEgdGhyb3VnaCBgbWF0dGVyYFxuICBjb25zdCBkYXRhID0gbWF0dGVyKGNvbnRlbnQuZGVmYXVsdCk7XG5cbiAgLy8gUGFzcyBkYXRhIHRvIG91ciBjb21wb25lbnQgcHJvcHNcbiAgcmV0dXJuIHsgLi4uZGF0YSB9O1xuXG4gIHJldHVybiB7IHNsdWcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RUZW1wbGF0ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1hdHRlciIsIlJlYWN0TWFya2Rvd24iLCJQb3N0VGVtcGxhdGUiLCJjb250ZW50IiwiZGF0YSIsImZyb250bWF0dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImgxIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsInF1ZXJ5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[slug].js"));
module.exports = __webpack_exports__;

})();