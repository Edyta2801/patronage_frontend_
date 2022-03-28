webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PopularProducts/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/PopularProducts/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MainButton */ \"./src/components/MainButton/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProductItem */ \"./src/components/ProductItem/index.tsx\");\n\nvar _jsxFileName = \"/Users/eszarowska/Desktop/patronage22_lublin_js_frontend/src/components/PopularProducts/index.tsx\";\n\n\n\n\n\n\n\n// import products from \"../../pages/api/products\";\nvar products = [{\n  \"id\": 1,\n  \"title\": \"Pierwszy produkt\",\n  \"price\": 15000,\n  \"description\": \"Opis proiduktu\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}, {\n  \"id\": 2,\n  \"title\": \"Drugi produkt\",\n  \"price\": 15555,\n  \"description\": \"First Prod\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}, {\n  \"id\": 3,\n  \"title\": \"Trzeci produkt\",\n  \"price\": 15551412,\n  \"description\": \"Sec Prod\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}];\nvar Underline = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"styled\"])('div')(function (_ref) {\n  var theme = _ref.theme;\n  return {\n    backgroundColor: theme.palette.primary.main,\n    width: '150px',\n    height: '5px',\n    textAlign: 'center',\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    borderRadius: '10%',\n    marginTop: '5px'\n  };\n});\n\nfunction PopularProducts(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      marginTop: 10,\n      flexGrow: 1\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      variant: \"h4\",\n      textAlign: 'center',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: \"Popular Products\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Underline, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        marginTop: 7,\n        flexGrow: 1\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        spacing: {\n          xs: 2,\n          md: 3\n        },\n        columns: {\n          xs: 2,\n          sm: 6,\n          md: 12\n        },\n        children: products && products.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            item: true // xs={12} sm={4} md={4} \n            ,\n            justifyContent: 'space',\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProductItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              id: product.id,\n              photos: product.photos,\n              title: product.title,\n              description: product.description,\n              price: product.price\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 25\n            }, _this)\n          }, product.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        marginTop: 3,\n        textAlign: 'center'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        href: \"/products\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MainButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: \"ALL PRODUCTS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, this);\n}\n\n_c = PopularProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularProducts);\n\nvar _c;\n\n$RefreshReg$(_c, \"PopularProducts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9wdWxhclByb2R1Y3RzL2luZGV4LnRzeD9lNjkzIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwiVW5kZXJsaW5lIiwic3R5bGVkIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIlBvcHVsYXJQcm9kdWN0cyIsInByb3BzIiwiZmxleEdyb3ciLCJ4cyIsIm1kIiwic20iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJwaG90b3MiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBSUEsSUFBTUEsUUFBUSxHQUNWLENBQ0k7QUFDSSxRQUFNLENBRFY7QUFDYSxXQUFTLGtCQUR0QjtBQUMwQyxXQUFTLEtBRG5EO0FBQzBELGlCQUFlLGdCQUR6RTtBQUVJLFlBQVU7QUFGZCxDQURKLEVBT0k7QUFDSSxRQUFNLENBRFY7QUFDYSxXQUFTLGVBRHRCO0FBQ3VDLFdBQVMsS0FEaEQ7QUFDdUQsaUJBQWUsWUFEdEU7QUFFSSxZQUFVO0FBRmQsQ0FQSixFQWFJO0FBQ0ksUUFBTSxDQURWO0FBQ2EsV0FBUyxnQkFEdEI7QUFDd0MsV0FBUyxRQURqRDtBQUMyRCxpQkFBZSxVQUQxRTtBQUVJLFlBQVU7QUFGZCxDQWJKLENBREo7QUFxQkEsSUFBTUMsU0FBUyxHQUFHQyxtRUFBTSxDQUFDLEtBQUQsQ0FBTixDQUFjO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDNUNDLG1CQUFlLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQURLO0FBRTVDQyxTQUFLLEVBQUUsT0FGcUM7QUFHNUNDLFVBQU0sRUFBRSxLQUhvQztBQUk1Q0MsYUFBUyxFQUFFLFFBSmlDO0FBSzVDQyxjQUFVLEVBQUUsTUFMZ0M7QUFNNUNDLGVBQVcsRUFBRSxNQU4rQjtBQU81Q0MsZ0JBQVksRUFBRSxLQVA4QjtBQVE1Q0MsYUFBUyxFQUFFO0FBUmlDLEdBQWhCO0FBQUEsQ0FBZCxDQUFsQjs7QUFXQSxTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUFxQztBQUFBOztBQUVqQyxzQkFDSSxxRUFBQyx5REFBRDtBQUFLLE1BQUUsRUFBRTtBQUFFRixlQUFTLEVBQUUsRUFBYjtBQUFpQkcsY0FBUSxFQUFFO0FBQTNCLEtBQVQ7QUFBQSw0QkFDSSxxRUFBQyxnRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixlQUFTLEVBQUUsUUFBcEM7QUFBQSw4QkFDSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSSxxRUFBQyx5REFBRDtBQUFLLFFBQUUsRUFBRTtBQUFHSCxpQkFBUyxFQUFFLENBQWQ7QUFBaUJHLGdCQUFRLEVBQUU7QUFBM0IsT0FBVDtBQUFBLDZCQUNJLHFFQUFDLDBEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUVGLGVBQU8sRUFBRTtBQUFFQyxZQUFFLEVBQUUsQ0FBTjtBQUFTQyxZQUFFLEVBQUU7QUFBYixTQUZQO0FBRXlCLGVBQU8sRUFBRTtBQUFFRCxZQUFFLEVBQUUsQ0FBTjtBQUFTRSxZQUFFLEVBQUMsQ0FBWjtBQUFnQkQsWUFBRSxFQUFFO0FBQXBCLFNBRmxDO0FBQUEsa0JBSUtuQixRQUFRLElBQUlBLFFBQVEsQ0FBQ3FCLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsOEJBQ3RCLHFFQUFDLDBEQUFEO0FBQU0sZ0JBQUksTUFBVixDQUNBO0FBREE7QUFJQSwwQkFBYyxFQUFFLE9BSmhCO0FBQUEsbUNBS0EscUVBQUMsb0RBQUQ7QUFFRSxnQkFBRSxFQUFFQSxPQUFPLENBQUNDLEVBRmQ7QUFHSSxvQkFBTSxFQUFFRCxPQUFPLENBQUNFLE1BSHBCO0FBSUksbUJBQUssRUFBRUYsT0FBTyxDQUFDRyxLQUpuQjtBQUtJLHlCQUFXLEVBQUVILE9BQU8sQ0FBQ0ksV0FMekI7QUFNSSxtQkFBSyxFQUFFSixPQUFPLENBQUNLO0FBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQSxhQUVLTCxPQUFPLENBQUNDLEVBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEc0I7QUFBQSxTQUFiO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUE2QkkscUVBQUMseURBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRVQsaUJBQVMsRUFBRSxDQUFiO0FBQWdCSixpQkFBUyxFQUFFO0FBQTNCLE9BQVQ7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQXVCLGdCQUFRLE1BQS9CO0FBQUEsK0JBQ0kscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVDSDs7S0F6Q1FLLGU7QUEyQ01BLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9wdWxhclByb2R1Y3RzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vTWFpbkJ1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IHsgYm94U2l6aW5nIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4uL1Byb2R1Y3RJdGVtXCI7XG5pbXBvcnQgeyBLZXksIFJlYWN0Q2hpbGQsIFJlYWN0RnJhZ21lbnQsIFJlYWN0UG9ydGFsIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9wcm9kdWN0c1wiO1xuXG5cblxuY29uc3QgcHJvZHVjdHMgPVxuICAgIFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxLCBcInRpdGxlXCI6IFwiUGllcndzenkgcHJvZHVrdFwiLCBcInByaWNlXCI6IDE1MDAwLCBcImRlc2NyaXB0aW9uXCI6IFwiT3BpcyBwcm9pZHVrdHVcIixcbiAgICAgICAgICAgIFwicGhvdG9zXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5ODYzMDA5MTctNjQ2NzRiZDYwMGQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcwJnE9ODBcIlxuICAgICAgICB9XG4gICAgICAgICxcblxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIsIFwidGl0bGVcIjogXCJEcnVnaSBwcm9kdWt0XCIsIFwicHJpY2VcIjogMTU1NTUsIFwiZGVzY3JpcHRpb25cIjogXCJGaXJzdCBQcm9kXCIsXG4gICAgICAgICAgICBcInBob3Rvc1wiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDQxOTg2MzAwOTE3LTY0Njc0YmQ2MDBkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzI3MCZxPTgwXCJcbiAgICAgICAgfVxuICAgICAgICAsXG5cbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAzLCBcInRpdGxlXCI6IFwiVHJ6ZWNpIHByb2R1a3RcIiwgXCJwcmljZVwiOiAxNTU1MTQxMiwgXCJkZXNjcmlwdGlvblwiOiBcIlNlYyBQcm9kXCIsXG4gICAgICAgICAgICBcInBob3Rvc1wiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDQxOTg2MzAwOTE3LTY0Njc0YmQ2MDBkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzI3MCZxPTgwXCJcbiAgICAgICAgfVxuXG4gICAgXVxuXG5jb25zdCBVbmRlcmxpbmUgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICB3aWR0aDogJzE1MHB4JyxcbiAgICBoZWlnaHQ6ICc1cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAlJyxcbiAgICBtYXJnaW5Ub3A6ICc1cHgnXG59KSk7XG5cbmZ1bmN0aW9uIFBvcHVsYXJQcm9kdWN0cyhwcm9wczogYW55KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHN4PXt7IG1hcmdpblRvcDogMTAsIGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICAgIDxCb3g+UG9wdWxhciBQcm9kdWN0czwvQm94PlxuICAgICAgICAgICAgICAgIDxVbmRlcmxpbmUgLz5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPEJveCBzeD17eyAgbWFyZ2luVG9wOiA3LCBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAzIH19IGNvbHVtbnM9e3sgeHM6IDIsIHNtOjYsICBtZDogMTIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cyAmJiBwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IHsgaWQ6IGFueTsgcGhvdG9zOiBhbnk7IGRlc2NyaXB0aW9uOiBhbnk7IHRpdGxlOiBhbnk7IHByaWNlOiBhbnk7IH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8geHM9ezEyfSBzbT17NH0gbWQ9ezR9IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9eydzcGFjZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaG90b3M9e3Byb2R1Y3QucGhvdG9zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luVG9wOiAzLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBBTEwgUFJPRFVDVFNcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PopularProducts/index.tsx\n");

/***/ })

})