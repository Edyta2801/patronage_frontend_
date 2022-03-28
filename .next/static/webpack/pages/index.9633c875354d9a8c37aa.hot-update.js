webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PopularProducts/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/PopularProducts/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MainButton */ \"./src/components/MainButton/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProductItem */ \"./src/components/ProductItem/index.tsx\");\n\nvar _jsxFileName = \"/Users/eszarowska/Desktop/patronage22_lublin_js_frontend/src/components/PopularProducts/index.tsx\";\n\n\n\n\n\n\n\n// import products from \"../../pages/api/products\";\nvar products = [{\n  \"id\": 1,\n  \"title\": \"Pierwszy produkt\",\n  \"price\": 15000,\n  \"description\": \"Opis proiduktu\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}, {\n  \"id\": 2,\n  \"title\": \"Drugi produkt\",\n  \"price\": 15555,\n  \"description\": \"First Prod\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}, {\n  \"id\": 3,\n  \"title\": \"Trzeci produkt\",\n  \"price\": 15551412,\n  \"description\": \"Sec Prod\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}];\nvar Underline = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"styled\"])('div')(function (_ref) {\n  var theme = _ref.theme;\n  return {\n    backgroundColor: theme.palette.primary.main,\n    width: '150px',\n    height: '5px',\n    textAlign: 'center',\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    borderRadius: '10%',\n    marginTop: '5px'\n  };\n});\n\nfunction PopularProducts(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      marginTop: 10,\n      flexGrow: 1\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      variant: \"h4\",\n      textAlign: 'center',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: \"Popular Products\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Underline, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        flexGrow: 1,\n        marginTop: 7\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        width: 100,\n        columns: {\n          xs: 2,\n          md: 12\n        },\n        children: [products && products.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProductItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            xs: 2,\n            sm: 4,\n            md: 4,\n            id: product.id,\n            photos: product.photos,\n            title: product.title,\n            description: product.description,\n            price: product.price\n          }, product.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 25\n          }, _this);\n        }), \";\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        marginTop: 3,\n        textAlign: 'center'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        href: \"/products\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MainButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: \"ALL PRODUCTS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, this);\n} // export async function getServerSideProps() {\n//     const response = await fetch('http://localhost:3000/api/products');\n//     const data = await response.json();\n//     return {\n//       props: {\n//         products: data,\n//       }\n//     }\n//   }\n\n\n_c = PopularProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularProducts);\n\nvar _c;\n\n$RefreshReg$(_c, \"PopularProducts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9wdWxhclByb2R1Y3RzL2luZGV4LnRzeD9lNjkzIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwiVW5kZXJsaW5lIiwic3R5bGVkIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIlBvcHVsYXJQcm9kdWN0cyIsInByb3BzIiwiZmxleEdyb3ciLCJ4cyIsIm1kIiwibWFwIiwicHJvZHVjdCIsImlkIiwicGhvdG9zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUlBLElBQU1BLFFBQVEsR0FDVixDQUNJO0FBQ0ksUUFBTSxDQURWO0FBQ2EsV0FBUyxrQkFEdEI7QUFDMEMsV0FBUyxLQURuRDtBQUMwRCxpQkFBZSxnQkFEekU7QUFFSSxZQUFVO0FBRmQsQ0FESixFQU9JO0FBQ0ksUUFBTSxDQURWO0FBQ2EsV0FBUyxlQUR0QjtBQUN1QyxXQUFTLEtBRGhEO0FBQ3VELGlCQUFlLFlBRHRFO0FBRUksWUFBVTtBQUZkLENBUEosRUFhSTtBQUNJLFFBQU0sQ0FEVjtBQUNhLFdBQVMsZ0JBRHRCO0FBQ3dDLFdBQVMsUUFEakQ7QUFDMkQsaUJBQWUsVUFEMUU7QUFFSSxZQUFVO0FBRmQsQ0FiSixDQURKO0FBcUJBLElBQU1DLFNBQVMsR0FBR0MsbUVBQU0sQ0FBQyxLQUFELENBQU4sQ0FBYztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQzVDQyxtQkFBZSxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFESztBQUU1Q0MsU0FBSyxFQUFFLE9BRnFDO0FBRzVDQyxVQUFNLEVBQUUsS0FIb0M7QUFJNUNDLGFBQVMsRUFBRSxRQUppQztBQUs1Q0MsY0FBVSxFQUFFLE1BTGdDO0FBTTVDQyxlQUFXLEVBQUUsTUFOK0I7QUFPNUNDLGdCQUFZLEVBQUUsS0FQOEI7QUFRNUNDLGFBQVMsRUFBRTtBQVJpQyxHQUFoQjtBQUFBLENBQWQsQ0FBbEI7O0FBV0EsU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBcUM7QUFBQTs7QUFFakMsc0JBQ0kscUVBQUMseURBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRUYsZUFBUyxFQUFFLEVBQWI7QUFBaUJHLGNBQVEsRUFBRTtBQUEzQixLQUFUO0FBQUEsNEJBQ0kscUVBQUMsZ0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBUyxFQUFFLFFBQXBDO0FBQUEsOEJBQ0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUkscUVBQUMseURBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRUEsZ0JBQVEsRUFBRSxDQUFaO0FBQWVILGlCQUFTLEVBQUU7QUFBMUIsT0FBVDtBQUFBLDZCQUNJLHFFQUFDLDBEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUNELGFBQUssRUFBRSxHQUROO0FBR0EsZUFBTyxFQUFFO0FBQUVJLFlBQUUsRUFBRSxDQUFOO0FBQVNDLFlBQUUsRUFBRTtBQUFiLFNBSFQ7QUFBQSxtQkFJS25CLFFBQVEsSUFBSUEsUUFBUSxDQUFDb0IsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw4QkFDdEIscUVBQUMsb0RBQUQ7QUFBYSxjQUFFLEVBQUUsQ0FBakI7QUFBb0IsY0FBRSxFQUFFLENBQXhCO0FBQTJCLGNBQUUsRUFBRSxDQUEvQjtBQUVJLGNBQUUsRUFBRUEsT0FBTyxDQUFDQyxFQUZoQjtBQUdJLGtCQUFNLEVBQUVELE9BQU8sQ0FBQ0UsTUFIcEI7QUFJSSxpQkFBSyxFQUFFRixPQUFPLENBQUNHLEtBSm5CO0FBS0ksdUJBQVcsRUFBRUgsT0FBTyxDQUFDSSxXQUx6QjtBQU1JLGlCQUFLLEVBQUVKLE9BQU8sQ0FBQ0s7QUFObkIsYUFDS0wsT0FBTyxDQUFDQyxFQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNCO0FBQUEsU0FBYixDQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUF1QkkscUVBQUMseURBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRVIsaUJBQVMsRUFBRSxDQUFiO0FBQWdCSixpQkFBUyxFQUFFO0FBQTNCLE9BQVQ7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQXVCLGdCQUFRLE1BQS9CO0FBQUEsK0JBQ0kscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlDSCxDLENBQ0Q7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0E5Q1NLLGU7QUFnRE1BLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9wdWxhclByb2R1Y3RzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiLi4vTWFpbkJ1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IHsgYm94U2l6aW5nIH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4uL1Byb2R1Y3RJdGVtXCI7XG5pbXBvcnQgeyBLZXksIFJlYWN0Q2hpbGQsIFJlYWN0RnJhZ21lbnQsIFJlYWN0UG9ydGFsIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9wcm9kdWN0c1wiO1xuXG5cblxuY29uc3QgcHJvZHVjdHMgPVxuICAgIFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxLCBcInRpdGxlXCI6IFwiUGllcndzenkgcHJvZHVrdFwiLCBcInByaWNlXCI6IDE1MDAwLCBcImRlc2NyaXB0aW9uXCI6IFwiT3BpcyBwcm9pZHVrdHVcIixcbiAgICAgICAgICAgIFwicGhvdG9zXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5ODYzMDA5MTctNjQ2NzRiZDYwMGQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcwJnE9ODBcIlxuICAgICAgICB9XG4gICAgICAgICxcblxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIsIFwidGl0bGVcIjogXCJEcnVnaSBwcm9kdWt0XCIsIFwicHJpY2VcIjogMTU1NTUsIFwiZGVzY3JpcHRpb25cIjogXCJGaXJzdCBQcm9kXCIsXG4gICAgICAgICAgICBcInBob3Rvc1wiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDQxOTg2MzAwOTE3LTY0Njc0YmQ2MDBkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzI3MCZxPTgwXCJcbiAgICAgICAgfVxuICAgICAgICAsXG5cbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAzLCBcInRpdGxlXCI6IFwiVHJ6ZWNpIHByb2R1a3RcIiwgXCJwcmljZVwiOiAxNTU1MTQxMiwgXCJkZXNjcmlwdGlvblwiOiBcIlNlYyBQcm9kXCIsXG4gICAgICAgICAgICBcInBob3Rvc1wiOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDQxOTg2MzAwOTE3LTY0Njc0YmQ2MDBkOD9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzI3MCZxPTgwXCJcbiAgICAgICAgfVxuXG4gICAgXVxuXG5jb25zdCBVbmRlcmxpbmUgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICB3aWR0aDogJzE1MHB4JyxcbiAgICBoZWlnaHQ6ICc1cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAlJyxcbiAgICBtYXJnaW5Ub3A6ICc1cHgnXG59KSk7XG5cbmZ1bmN0aW9uIFBvcHVsYXJQcm9kdWN0cyhwcm9wczogYW55KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHN4PXt7IG1hcmdpblRvcDogMTAsIGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICAgIDxCb3g+UG9wdWxhciBQcm9kdWN0czwvQm94PlxuICAgICAgICAgICAgICAgIDxVbmRlcmxpbmUgLz5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgbWFyZ2luVG9wOiA3IH19PlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBcbiAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29sdW1ucz17eyB4czogMiwgbWQ6IDEyIH19PlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMgJiYgcHJvZHVjdHMubWFwKChwcm9kdWN0OiB7IGlkOiBhbnk7IHBob3RvczogYW55OyBkZXNjcmlwdGlvbjogYW55OyB0aXRsZTogYW55OyBwcmljZTogYW55OyB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtIHhzPXsyfSBzbT17NH0gbWQ9ezR9IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob3Rvcz17cHJvZHVjdC5waG90b3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfTtcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luVG9wOiAzLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPE1haW5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBBTEwgUFJPRFVDVFNcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICApO1xufVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzJyk7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgIHByb2R1Y3RzOiBkYXRhLFxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PopularProducts/index.tsx\n");

/***/ })

})