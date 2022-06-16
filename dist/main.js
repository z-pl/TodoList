/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createUI */ \"./src/modules/createUI.js\");\n/* harmony import */ var _modules_createEventListiners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createEventListiners */ \"./src/modules/createEventListiners.js\");\n\n\n\n\n(0,_modules_createUI__WEBPACK_IMPORTED_MODULE_0__.displayPage)();\n(0,_modules_createEventListiners__WEBPACK_IMPORTED_MODULE_1__.createAddEventListiners)();\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/createDomElements.js":
/*!******************************************!*\
  !*** ./src/modules/createDomElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNavHeader\": () => (/* binding */ createNavHeader),\n/* harmony export */   \"createProjectContent\": () => (/* binding */ createProjectContent),\n/* harmony export */   \"updateProjectList\": () => (/* binding */ updateProjectList)\n/* harmony export */ });\nconst createNavHeader = () => {\n  const navHeader =\n  `<nav class = \"nav-header\">\n    <h2 class = \"title\">Todo List</h2>\n    <div class = \"date-header\">DATE</div>\n  </nav>`;\n\n  return navHeader;\n}\n\nconst createProjectContent = () => {\n  const projectContent =\n  `<div class = \"project-content\">\n    ${createProjectHeader()}\n    ${createProjectsList()}\n    ${createProjectsForm()}\n  </div>\n  <i class=\"fa-solid fa-circle-plus\" id = \"add-btn\"></i>`\n\n  return projectContent;\n}\n\nconst createProjectsList = () => {\n  const projectList =\n  `<ul class=\"project-list\">\n    <div class = \"project-item\">\n      <p class = \"project\"> Default sadasda</p>\n    </div>\n    <div class = \"project-item\">\n      <p class = \"project\"> Dadsadas adt</p>\n    </div>\n    <div class = \"project-item\">\n      <p class = \"project\"> Deasdsada fault</p>\n    </div>\n  </ul>`;\n\n  return projectList;\n}\n\nconst createProjectHeader = () => {\n  const projectHeader =\n  `<h3 class = \"project-header\">Projects</h3>\n  <div class = \"divider\"></div>`;\n\n  return projectHeader;\n}\n\nconst createProjectsForm = () => {\n  const projectForm =\n  `<div class = \"form-container\">\n    <form action = \"#\" method = \"get\">\n      <input type = \"text\" id = \"project-name\" placeholder = \"project name\">\n      <input type= \"image\" id = \"add-project\" src=\"../dist/img/circle-check-regular.svg\"/>\n      <input type= \"image\" id = \"cancel-project\" src=\"../dist/img/circle-xmark-regular.svg\"/>\n    </form>\n  </div>`\n\n  return projectForm;\n}\n\nconst updateProjectList = (projectName) => {\n  const projectElement =\n\n  `<div class = \"project-item\">\n    <p class = \"project\">${projectName}</p>\n  </div>`\n\n  return projectElement;\n}\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/createDomElements.js?");

/***/ }),

/***/ "./src/modules/createEventListiners.js":
/*!*********************************************!*\
  !*** ./src/modules/createEventListiners.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAddEventListiners\": () => (/* binding */ createAddEventListiners)\n/* harmony export */ });\n/* harmony import */ var _createUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUI */ \"./src/modules/createUI.js\");\n\n\nconst createAddEventListiners = () => {\n  createAddProjectEventListiner();\n  createCancelProjectEventListiner();\n  createAddProjectListEventListiner();\n}\n\nconst createAddProjectEventListiner = () => {\n  const addProjectElement = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getAddProjectInput)();\n  const projectForm = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getProjectForm)();\n  const addProjectListElement = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getAddProjectBtn)();\n  const projectInputField = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getProjectInput)();\n\n  addProjectElement.addEventListener(\"click\", (e) => {\n    e.preventDefault()\n    projectForm.style = \"display: none\";\n    addProjectListElement.style = \"display: inline-block\";\n    (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.updateProjectListPage)(projectInputField.value);\n\n  })\n\n}\n\nconst createCancelProjectEventListiner = () => {\n  const cancelProjectElement = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getCancelProjectInput)();\n  const projectForm = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getProjectForm)();\n  const addProjectListElement = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getAddProjectBtn)();\n\n  cancelProjectElement.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    projectForm.style = \"display: none\";\n    addProjectListElement.style = \"display: inline-block\";\n  })\n}\n\nconst createAddProjectListEventListiner = () =>{\n  const addProjectListElement = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getAddProjectBtn)();\n  const projectForm = (0,_createUI__WEBPACK_IMPORTED_MODULE_0__.getProjectForm)();\n\n  addProjectListElement.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    projectForm.style = \"display: block\";\n    addProjectListElement.style = \"display: none\";\n  })\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/createEventListiners.js?");

/***/ }),

/***/ "./src/modules/createUI.js":
/*!*********************************!*\
  !*** ./src/modules/createUI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPage\": () => (/* binding */ displayPage),\n/* harmony export */   \"getAddProjectBtn\": () => (/* binding */ getAddProjectBtn),\n/* harmony export */   \"getAddProjectInput\": () => (/* binding */ getAddProjectInput),\n/* harmony export */   \"getCancelProjectInput\": () => (/* binding */ getCancelProjectInput),\n/* harmony export */   \"getProjectForm\": () => (/* binding */ getProjectForm),\n/* harmony export */   \"getProjectInput\": () => (/* binding */ getProjectInput),\n/* harmony export */   \"getProjectList\": () => (/* binding */ getProjectList),\n/* harmony export */   \"updateProjectListPage\": () => (/* binding */ updateProjectListPage)\n/* harmony export */ });\n/* harmony import */ var _createDomElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomElements */ \"./src/modules/createDomElements.js\");\n\n\nconst container = document.querySelector(\".container\");\nconst project = document.querySelector(\".projects\");\n\nconst displayPage = () => {\n  container.insertAdjacentHTML(\"afterbegin\", (0,_createDomElements__WEBPACK_IMPORTED_MODULE_0__.createNavHeader)());\n  project.insertAdjacentHTML(\"afterbegin\", (0,_createDomElements__WEBPACK_IMPORTED_MODULE_0__.createProjectContent)());\n}\n\n\n\nconst getProjectInput = () => {\n  const element = document.querySelector(\"#project-name\")\n  return element;\n}\n\nconst getAddProjectInput = () => {\n  const element = document.querySelector(\"#add-project\");\n  return element;\n}\n\nconst getCancelProjectInput = () => {\n  const element = document.querySelector(\"#cancel-project\");\n  return element;\n}\n\nconst getProjectForm = () => {\n  const element = document.querySelector(\".form-container\")\n  return element;\n}\n\nconst getAddProjectBtn = () => {\n  const element = document.querySelector(\"#add-btn\")\n  return element;\n}\n\nconst getProjectList = () => {\n  const element = document.querySelector(\".project-list\")\n  return element;\n}\n\nconst getAllProjects = () => {\n  const element =getProjectList()\n\n}\nconst updateProjectListPage = (newProjectName) => {\n  const projectList = getProjectList();\n  const newProject = (0,_createDomElements__WEBPACK_IMPORTED_MODULE_0__.updateProjectList)(newProjectName);\n\n  projectList.insertAdjacentHTML(\"beforeend\", newProject);\n}\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/createUI.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;