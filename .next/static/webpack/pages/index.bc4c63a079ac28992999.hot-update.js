webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PopularProducts/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/PopularProducts/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MainButton */ \"./src/components/MainButton/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProductItem */ \"./src/components/ProductItem/index.tsx\");\n\nvar _jsxFileName = \"/Users/eszarowska/Desktop/patronage22_lublin_js_frontend/src/components/PopularProducts/index.tsx\";\n\n\n\n\n\n\n\n// import products from \"../../pages/api/products\";\nvar products = [{\n  \"id\": 1,\n  \"title\": \"Pierwszy produkt\",\n  \"price\": 15000,\n  \"description\": \"Opis proiduktu\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}, {\n  \"id\": 2,\n  \"title\": \"Drugi produkt\",\n  \"price\": 15555,\n  \"description\": \"First Prod\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}, {\n  \"id\": 3,\n  \"title\": \"Trzeci produkt\",\n  \"price\": 15551412,\n  \"description\": \"Sec Prod\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}];\nvar Underline = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"styled\"])('div')(function (_ref) {\n  var theme = _ref.theme;\n  return {\n    backgroundColor: theme.palette.primary.main,\n    width: '150px',\n    height: '5px',\n    textAlign: 'center',\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    borderRadius: '10%',\n    marginTop: '5px'\n  };\n});\n\nfunction PopularProducts(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      marginTop: 10,\n      flexGrow: 1\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      variant: \"h4\",\n      textAlign: 'center',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: \"Popular Products\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Underline, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        marginTop: 7\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        justifyContent: true,\n        columns: {\n          xs: 12,\n          md: 4\n        },\n        children: products && products.map(function (product) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProductItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"] // spacing={3} \n          // xs={2} sm={4} md={4} \n          , {\n            id: product.id,\n            photos: product.photos,\n            title: product.title,\n            description: product.description,\n            price: product.price\n          }, product.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        marginTop: 3,\n        textAlign: 'center'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        href: \"/products\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MainButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: \"ALL PRODUCTS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, this);\n} // export async function getServerSideProps() {\n//     const response = await fetch('http://localhost:3000/api/products');\n//     const data = await response.json();\n//     return {\n//       props: {\n//         products: data,\n//       }\n//     }\n//   }\n\n\n_c = PopularProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularProducts);\n\nvar _c;\n\n$RefreshReg$(_c, \"PopularProducts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9wdWxhclByb2R1Y3RzL2luZGV4LnRzeD9lNjkzIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwiVW5kZXJsaW5lIiwic3R5bGVkIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIlBvcHVsYXJQcm9kdWN0cyIsInByb3BzIiwiZmxleEdyb3ciLCJ4cyIsIm1kIiwibWFwIiwicHJvZHVjdCIsImlkIiwicGhvdG9zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUlBLElBQU1BLFFBQVEsR0FDVixDQUNJO0FBQ0ksUUFBTSxDQURWO0FBQ2EsV0FBUyxrQkFEdEI7QUFDMEMsV0FBUyxLQURuRDtBQUMwRCxpQkFBZSxnQkFEekU7QUFFSSxZQUFVO0FBRmQsQ0FESixFQU9JO0FBQ0ksUUFBTSxDQURWO0FBQ2EsV0FBUyxlQUR0QjtBQUN1QyxXQUFTLEtBRGhEO0FBQ3VELGlCQUFlLFlBRHRFO0FBRUksWUFBVTtBQUZkLENBUEosRUFhSTtBQUNJLFFBQU0sQ0FEVjtBQUNhLFdBQVMsZ0JBRHRCO0FBQ3dDLFdBQVMsUUFEakQ7QUFDMkQsaUJBQWUsVUFEMUU7QUFFSSxZQUFVO0FBRmQsQ0FiSixDQURKO0FBcUJBLElBQU1DLFNBQVMsR0FBR0MsbUVBQU0sQ0FBQyxLQUFELENBQU4sQ0FBYztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQzVDQyxtQkFBZSxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFESztBQUU1Q0MsU0FBSyxFQUFFLE9BRnFDO0FBRzVDQyxVQUFNLEVBQUUsS0FIb0M7QUFJNUNDLGFBQVMsRUFBRSxRQUppQztBQUs1Q0MsY0FBVSxFQUFFLE1BTGdDO0FBTTVDQyxlQUFXLEVBQUUsTUFOK0I7QUFPNUNDLGdCQUFZLEVBQUUsS0FQOEI7QUFRNUNDLGFBQVMsRUFBRTtBQVJpQyxHQUFoQjtBQUFBLENBQWQsQ0FBbEI7O0FBV0EsU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBcUM7QUFBQTs7QUFFakMsc0JBQ0kscUVBQUMseURBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRUYsZUFBUyxFQUFFLEVBQWI7QUFBaUJHLGNBQVEsRUFBRTtBQUEzQixLQUFUO0FBQUEsNEJBQ0kscUVBQUMsZ0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBUyxFQUFFLFFBQXBDO0FBQUEsOEJBQ0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUkscUVBQUMseURBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBR0gsaUJBQVMsRUFBRTtBQUFkLE9BQVQ7QUFBQSw2QkFDSSxxRUFBQywwREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFDRixzQkFBYyxNQURaO0FBR0EsZUFBTyxFQUFFO0FBQUVJLFlBQUUsRUFBRSxFQUFOO0FBQVVDLFlBQUUsRUFBRTtBQUFkLFNBSFQ7QUFBQSxrQkFJS25CLFFBQVEsSUFBSUEsUUFBUSxDQUFDb0IsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw4QkFDdEIscUVBQUMsb0RBQUQsQ0FDQTtBQUNBO0FBRkE7QUFJSSxjQUFFLEVBQUVBLE9BQU8sQ0FBQ0MsRUFKaEI7QUFLSSxrQkFBTSxFQUFFRCxPQUFPLENBQUNFLE1BTHBCO0FBTUksaUJBQUssRUFBRUYsT0FBTyxDQUFDRyxLQU5uQjtBQU9JLHVCQUFXLEVBQUVILE9BQU8sQ0FBQ0ksV0FQekI7QUFRSSxpQkFBSyxFQUFFSixPQUFPLENBQUNLO0FBUm5CLGFBR0tMLE9BQU8sQ0FBQ0MsRUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURzQjtBQUFBLFNBQWI7QUFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQXlCSSxxRUFBQyx5REFBRDtBQUFLLFFBQUUsRUFBRTtBQUFFUixpQkFBUyxFQUFFLENBQWI7QUFBZ0JKLGlCQUFTLEVBQUU7QUFBM0IsT0FBVDtBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFdBQVg7QUFBdUIsZ0JBQVEsTUFBL0I7QUFBQSwrQkFDSSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUNILEMsQ0FDRDtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQWhEU0ssZTtBQWtETUEsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb3B1bGFyUHJvZHVjdHMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmltcG9ydCBNYWluQnV0dG9uIGZyb20gXCIuLi9NYWluQnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XG5pbXBvcnQgeyBib3hTaXppbmcgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vUHJvZHVjdEl0ZW1cIjtcbmltcG9ydCB7IEtleSwgUmVhY3RDaGlsZCwgUmVhY3RGcmFnbWVudCwgUmVhY3RQb3J0YWwgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL3Byb2R1Y3RzXCI7XG5cblxuXG5jb25zdCBwcm9kdWN0cyA9XG4gICAgW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDEsIFwidGl0bGVcIjogXCJQaWVyd3N6eSBwcm9kdWt0XCIsIFwicHJpY2VcIjogMTUwMDAsIFwiZGVzY3JpcHRpb25cIjogXCJPcGlzIHByb2lkdWt0dVwiLFxuICAgICAgICAgICAgXCJwaG90b3NcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ0MTk4NjMwMDkxNy02NDY3NGJkNjAwZDg/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMyNzAmcT04MFwiXG4gICAgICAgIH1cbiAgICAgICAgLFxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMiwgXCJ0aXRsZVwiOiBcIkRydWdpIHByb2R1a3RcIiwgXCJwcmljZVwiOiAxNTU1NSwgXCJkZXNjcmlwdGlvblwiOiBcIkZpcnN0IFByb2RcIixcbiAgICAgICAgICAgIFwicGhvdG9zXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5ODYzMDA5MTctNjQ2NzRiZDYwMGQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcwJnE9ODBcIlxuICAgICAgICB9XG4gICAgICAgICxcblxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDMsIFwidGl0bGVcIjogXCJUcnplY2kgcHJvZHVrdFwiLCBcInByaWNlXCI6IDE1NTUxNDEyLCBcImRlc2NyaXB0aW9uXCI6IFwiU2VjIFByb2RcIixcbiAgICAgICAgICAgIFwicGhvdG9zXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5ODYzMDA5MTctNjQ2NzRiZDYwMGQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcwJnE9ODBcIlxuICAgICAgICB9XG5cbiAgICBdXG5cbmNvbnN0IFVuZGVybGluZSA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIHdpZHRoOiAnMTUwcHgnLFxuICAgIGhlaWdodDogJzVweCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMCUnLFxuICAgIG1hcmdpblRvcDogJzVweCdcbn0pKTtcblxuZnVuY3Rpb24gUG9wdWxhclByb2R1Y3RzKHByb3BzOiBhbnkpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3g9e3sgbWFyZ2luVG9wOiAxMCwgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgICAgPEJveD5Qb3B1bGFyIFByb2R1Y3RzPC9Cb3g+XG4gICAgICAgICAgICAgICAgPFVuZGVybGluZSAvPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8Qm94IHN4PXt7ICBtYXJnaW5Ub3A6IDcgfX0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e3sgeHM6IDEyLCBtZDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzICYmIHByb2R1Y3RzLm1hcCgocHJvZHVjdDogeyBpZDogYW55OyBwaG90b3M6IGFueTsgZGVzY3JpcHRpb246IGFueTsgdGl0bGU6IGFueTsgcHJpY2U6IGFueTsgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNwYWNpbmc9ezN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8geHM9ezJ9IHNtPXs0fSBtZD17NH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9zPXtwcm9kdWN0LnBob3Rvc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpblRvcDogMywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxNYWluQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgQUxMIFBST0RVQ1RTXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn1cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0cycpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge1xuLy8gICAgICAgICBwcm9kdWN0czogZGF0YSxcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhclByb2R1Y3RzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PopularProducts/index.tsx\n");

/***/ })

})