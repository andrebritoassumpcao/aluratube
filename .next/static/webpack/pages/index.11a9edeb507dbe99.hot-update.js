"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/FavoriteCards.jsx":
/*!******************************************!*\
  !*** ./src/components/FavoriteCards.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoriteCards\": function() { return /* binding */ FavoriteCards; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  gap: 8px;\\n  margin-top: 16px;\\n  a {\\n    display: flex;\\n    flex-direction: column;\\n    text-align: center;\\n    text-decoration: none;\\n    color: \",\n        \";\\n    gap: 8px;\\n    > span {\\n      font-size: 14px;\\n      font-weight: 400;\\n    }\\n    &:visited {\\n      color: #3957c2;\\n    }\\n  }\\n  img {\\n    display: inline-block;\\n    width: 100px;\\n    height: 100px;\\n    border-radius: 50%;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst StyledFavoriteCards = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"FavoriteCards__StyledFavoriteCards\",\n    componentId: \"sc-ddca8186-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase;\n});\n_c = StyledFavoriteCards;\nfunction FavoriteCards(param) {\n    let {} = param;\n    const favorites = _config_json__WEBPACK_IMPORTED_MODULE_2__[\"favorites-cards\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledFavoriteCards, {\n        children: favorites.map((card, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                href: \"https:///github.com/\".concat(card.github),\n                target: \"_blank\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"https://github.com/\".concat(card.github, \".png\"),\n                        alt: card.github\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projetos\\\\aluratube\\\\src\\\\components\\\\FavoriteCards.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            \"@\",\n                            card.github\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projetos\\\\aluratube\\\\src\\\\components\\\\FavoriteCards.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\projetos\\\\aluratube\\\\src\\\\components\\\\FavoriteCards.jsx\",\n                lineNumber: 38,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\projetos\\\\aluratube\\\\src\\\\components\\\\FavoriteCards.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c1 = FavoriteCards;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledFavoriteCards\");\n$RefreshReg$(_c1, \"FavoriteCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GYXZvcml0ZUNhcmRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0E7QUFFdkMsTUFBTUUsc0JBQXNCRix3RUFBVTs7O3NCQVN6QixTQUFlSTtRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNQyxhQUFhO0FBQUQ7S0FUeENIO0FBMkJDLFNBQVNJLGNBQWMsS0FBRSxFQUFFO1FBQUosRUFBRSxHQUFGO0lBQzVCLE1BQU1DLFlBQVlOLDREQUF5QjtJQUUzQyxxQkFDRSw4REFBQ0M7a0JBQ0VLLFVBQVVDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO1lBQzlCLHFCQUNFLDhEQUFDQztnQkFDQ0MsTUFBTSx1QkFBbUMsT0FBWkgsS0FBS0ksTUFBTTtnQkFDeENDLFFBQU87O2tDQUdQLDhEQUFDQzt3QkFDQ0MsS0FBSyxzQkFBa0MsT0FBWlAsS0FBS0ksTUFBTSxFQUFDO3dCQUN2Q0ksS0FBS1IsS0FBS0ksTUFBTTs7Ozs7O2tDQUVsQiw4REFBQ0s7OzRCQUFLOzRCQUFFVCxLQUFLSSxNQUFNOzs7Ozs7OztlQU5kSDs7Ozs7UUFTWDs7Ozs7O0FBR04sQ0FBQztNQXRCZUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmF2b3JpdGVDYXJkcy5qc3g/ZmI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcuanNvblwiO1xyXG5cclxuY29uc3QgU3R5bGVkRmF2b3JpdGVDYXJkcyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3JCYXNlfTtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgJjp2aXNpdGVkIHtcclxuICAgICAgY29sb3I6ICMzOTU3YzI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGYXZvcml0ZUNhcmRzKHt9KSB7XHJcbiAgY29uc3QgZmF2b3JpdGVzID0gY29uZmlnW1wiZmF2b3JpdGVzLWNhcmRzXCJdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEZhdm9yaXRlQ2FyZHM+XHJcbiAgICAgIHtmYXZvcml0ZXMubWFwKChjYXJkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly8vZ2l0aHViLmNvbS8ke2NhcmQuZ2l0aHVifWB9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtjYXJkLmdpdGh1Yn0ucG5nYH1cclxuICAgICAgICAgICAgICBhbHQ9e2NhcmQuZ2l0aHVifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3Bhbj5Ae2NhcmQuZ2l0aHVifTwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvU3R5bGVkRmF2b3JpdGVDYXJkcz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjb25maWciLCJTdHlsZWRGYXZvcml0ZUNhcmRzIiwiZGl2IiwidGhlbWUiLCJ0ZXh0Q29sb3JCYXNlIiwiRmF2b3JpdGVDYXJkcyIsImZhdm9yaXRlcyIsIm1hcCIsImNhcmQiLCJpbmRleCIsImEiLCJocmVmIiwiZ2l0aHViIiwidGFyZ2V0IiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FavoriteCards.jsx\n"));

/***/ })

});