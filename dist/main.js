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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map.js */ \"./src/scripts/map.js\");\n// // import Example from \"./scripts/example\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // const main = document.getElementById(\"main\");\n  // new map(main);\n  console.log(\"hello\");\n  new _scripts_map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNrQztBQUVsQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEO0VBQ0E7RUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3BCLElBQUlKLHVEQUFHLEVBQUU7QUFDYixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5pbXBvcnQgTWFwIGZyb20gXCIuL3NjcmlwdHMvbWFwLmpzXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgLy8gbmV3IG1hcChtYWluKTtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gICAgbmV3IE1hcCgpXG59KTtcblxuXG5cblxuIl0sIm5hbWVzIjpbIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// import * as worldMap from \"../../countries-110m.json\"\n// import * as groups from \".../data/groups.json\"\n\nclass Map {\n  constructor() {\n    this.renderMap();\n  }\n  renderMap() {\n    // debugger\n    // console.log(groups)\n    const width = 975;\n    const height = 610;\n    const svg = d3.select(\"#map\").append(\"svg\").attr(\"width\", width).attr(\"height\", height).append(\"g\");\n    const projection = d3.geoMercator();\n    const path = d3.geoPath().projection(projection);\n    d3.json(\"https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json\").then(data => {\n      const countries = topojson.feature(data, data.objects.countries);\n      svg.selectAll(\"path\").data(countries.features).enter().append(\"path\").attr(\"class\", \"country\").attr(\"d\", path).on(\"mouseover\", function (d) {\n        d3.select(this).classed(\"selected\", true);\n      }).on(\"mouseout\", function (d) {\n        d3.select(this).classed(\"selected\", false);\n      });\n      d3.selectAll('.country')._groups[0].forEach(ele => {\n        if ([\"Qatar\", \"Ecuador\", \"Senegal\", \"Netherlands\"].includes(ele.__data__.properties.name)) {\n          d3.select(ele).classed(\"groupA\", true);\n        }\n        ele.addEventListener(\"click\", function () {\n          // debugger;\n          ele.classList.add('blue');\n          // alert(ele.__data__.properties.name);\n        });\n      });\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxDQUFDO0VBQ05DLFdBQVcsR0FBRztJQUNWLElBQUksQ0FBQ0MsU0FBUyxFQUFFO0VBQ3BCO0VBRUFBLFNBQVMsR0FBRztJQUNSO0lBQ0E7SUFDQSxNQUFNQyxLQUFLLEdBQUcsR0FBRztJQUNqQixNQUFNQyxNQUFNLEdBQUcsR0FBRztJQUVsQixNQUFNQyxHQUFHLEdBQUlDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUN6QkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNiQyxJQUFJLENBQUMsT0FBTyxFQUFFTixLQUFLLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFFBQVEsRUFBRUwsTUFBTSxDQUFDLENBQzNDSSxNQUFNLENBQUMsR0FBRyxDQUFDO0lBRWhCLE1BQU1FLFVBQVUsR0FBR0osRUFBRSxDQUFDSyxXQUFXLEVBQUU7SUFDbkMsTUFBTUMsSUFBSSxHQUFHTixFQUFFLENBQUNPLE9BQU8sRUFBRSxDQUNwQkgsVUFBVSxDQUFDQSxVQUFVLENBQUM7SUFFM0JKLEVBQUUsQ0FBQ1EsSUFBSSxDQUFDLG9FQUFvRSxDQUFDLENBQ3hFQyxJQUFJLENBQUNDLElBQUksSUFBSTtNQUNWLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxPQUFPLENBQUNILElBQUksRUFBRUEsSUFBSSxDQUFDSSxPQUFPLENBQUNILFNBQVMsQ0FBQztNQUNoRVosR0FBRyxDQUFDZ0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUNoQkwsSUFBSSxDQUFDQyxTQUFTLENBQUNLLFFBQVEsQ0FBQyxDQUN4QkMsS0FBSyxFQUFFLENBQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDdEJDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQ3hCQSxJQUFJLENBQUMsR0FBRyxFQUFFRyxJQUFJLENBQUMsQ0FDZlksRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFTQyxDQUFDLEVBQUU7UUFDekJuQixFQUFFLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQ21CLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO01BQzdDLENBQUMsQ0FBQyxDQUNERixFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVNDLENBQUMsRUFBRTtRQUN4Qm5CLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDbUIsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFDOUMsQ0FBQyxDQUFDO01BRVZwQixFQUFFLENBQ0dlLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FDckJNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDVkMsT0FBTyxDQUFDQyxHQUFHLElBQUk7UUFDWixJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUNDLFFBQVEsQ0FBQ0QsR0FBRyxDQUFDRSxRQUFRLENBQUNDLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLEVBQUU7VUFDdkYzQixFQUFFLENBQUNDLE1BQU0sQ0FBQ3NCLEdBQUcsQ0FBQyxDQUFDSCxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztRQUMxQztRQUNBRyxHQUFHLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO1VBQ3RDO1VBQ0FMLEdBQUcsQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQ3pCO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBRU4sQ0FBQyxDQUFDO0VBQ1Y7QUFJSjs7QUFFQSwrREFBZXBDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWFwLmpzP2Y1NmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgd29ybGRNYXAgZnJvbSBcIi4uLy4uL2NvdW50cmllcy0xMTBtLmpzb25cIlxuLy8gaW1wb3J0ICogYXMgZ3JvdXBzIGZyb20gXCIuLi4vZGF0YS9ncm91cHMuanNvblwiXG5cbmNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWFwKClcbiAgICB9XG5cbiAgICByZW5kZXJNYXAoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdyb3VwcylcbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NzU7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDYxMDtcblxuICAgICAgICBjb25zdCBzdmcgPSAgZDMuc2VsZWN0KFwiI21hcFwiKVxuICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTWVyY2F0b3IoKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgICAgICAgICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbiAgICAgICAgZDMuanNvbihcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vd29ybGQtYXRsYXNAMi4wLjIvY291bnRyaWVzLTExMG0uanNvblwiKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMuY291bnRyaWVzKTtcbiAgICAgICAgICAgICAgICBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgICAgICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnlcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcInNlbGVjdGVkXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgZmFsc2UpIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkM1xuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoJy5jb3VudHJ5JylcbiAgICAgICAgICAgICAgICAuX2dyb3Vwc1swXVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbXCJRYXRhclwiLCBcIkVjdWFkb3JcIiwgXCJTZW5lZ2FsXCIsIFwiTmV0aGVybGFuZHNcIl0uaW5jbHVkZXMoZWxlLl9fZGF0YV9fLnByb3BlcnRpZXMubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdChlbGUpLmNsYXNzZWQoXCJncm91cEFcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoJ2JsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KGVsZS5fX2RhdGFfXy5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBcbiAgICBcbiJdLCJuYW1lcyI6WyJNYXAiLCJjb25zdHJ1Y3RvciIsInJlbmRlck1hcCIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwicHJvamVjdGlvbiIsImdlb01lcmNhdG9yIiwicGF0aCIsImdlb1BhdGgiLCJqc29uIiwidGhlbiIsImRhdGEiLCJjb3VudHJpZXMiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwic2VsZWN0QWxsIiwiZmVhdHVyZXMiLCJlbnRlciIsIm9uIiwiZCIsImNsYXNzZWQiLCJfZ3JvdXBzIiwiZm9yRWFjaCIsImVsZSIsImluY2x1ZGVzIiwiX19kYXRhX18iLCJwcm9wZXJ0aWVzIiwibmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

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