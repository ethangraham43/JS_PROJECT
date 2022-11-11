/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map.js */ \"./src/scripts/map.js\");\n// import Example from \"./scripts/example\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new _scripts_map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNtQztBQUVuQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLElBQUlKLHVEQUFHLENBQUNHLElBQUksQ0FBQztBQUNqQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5pbXBvcnQgTWFwIGZyb20gXCIuL3NjcmlwdHMvbWFwLmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG5ldyBNYXAobWFpbik7XG59KTtcblxuIl0sIm5hbWVzIjpbIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nclass Map {\n  constructor() {\n    _defineProperty(this, \"width\", 900);\n    _defineProperty(this, \"height\", 600);\n    _defineProperty(this, \"svg\", d3.select('body').append('svg').attr('width', width).attr('height', height));\n    _defineProperty(this, \"projection\", d3.geoMercator());\n    _defineProperty(this, \"path\", d3.geopath(projection));\n    _defineProperty(this, \"g\", svg.append('g'));\n  }\n  renderMap() {\n    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then(data => {\n      const countries = topojson.feature(data, data.objects.countries);\n      g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxHQUFHO0VBQUE7SUFBQSwrQkFDRyxHQUFHO0lBQUEsZ0NBQ0YsR0FBRztJQUFBLDZCQUVOQyxFQUFFLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFQyxLQUFLLENBQUMsQ0FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRUUsTUFBTSxDQUFDO0lBQUEsb0NBRXBFTCxFQUFFLENBQUNNLFdBQVcsRUFBRTtJQUFBLDhCQUN0Qk4sRUFBRSxDQUFDTyxPQUFPLENBQUNDLFVBQVUsQ0FBQztJQUFBLDJCQUV6QkMsR0FBRyxDQUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO0VBQUE7RUFDbkJRLFNBQVMsR0FBRztJQUNSVixFQUFFLENBQUNXLElBQUksQ0FBQyxvRUFBb0UsQ0FBQyxDQUM1RUMsSUFBSSxDQUFDQyxJQUFJLElBQUk7TUFFZCxNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDSCxJQUFJLEVBQUVBLElBQUksQ0FBQ0ksT0FBTyxDQUFDSCxTQUFTLENBQUM7TUFDaEVJLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDTixJQUFJLENBQUNDLFNBQVMsQ0FBQ00sUUFBUSxDQUFDLENBQUNDLEtBQUssRUFBRSxDQUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDQSxJQUFJLENBQUMsR0FBRyxFQUFFbUIsSUFBSSxDQUFDO0lBRTVHLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFFQSwrREFBZXZCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWFwLmpzP2Y1NmQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWFwe1xuICAgIHdpZHRoID0gOTAwO1xuICAgIGhlaWdodCA9IDYwMDtcblxuICAgIHN2ZyA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnc3ZnJykuYXR0cignd2lkdGgnLCB3aWR0aCkuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgIHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpO1xuICAgIHBhdGggPSBkMy5nZW9wYXRoKHByb2plY3Rpb24pO1xuXG4gICAgZyA9IHN2Zy5hcHBlbmQoJ2cnKTtcbiAgICByZW5kZXJNYXAoKSB7XG4gICAgICAgIGQzLmpzb24oJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vd29ybGQtYXRsYXNAMi4wLjIvY291bnRyaWVzLTExMG0uanNvbicpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMuY291bnRyaWVzKTtcbiAgICAgICAgZy5zZWxlY3RBbGwoJ3BhdGgnKS5kYXRhKGNvdW50cmllcy5mZWF0dXJlcykuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdjbGFzcycsICdjb3VudHJ5JykuYXR0cignZCcsIHBhdGgpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJuYW1lcyI6WyJNYXAiLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ3aWR0aCIsImhlaWdodCIsImdlb01lcmNhdG9yIiwiZ2VvcGF0aCIsInByb2plY3Rpb24iLCJzdmciLCJyZW5kZXJNYXAiLCJqc29uIiwidGhlbiIsImRhdGEiLCJjb3VudHJpZXMiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwiZyIsInNlbGVjdEFsbCIsImZlYXR1cmVzIiwiZW50ZXIiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;