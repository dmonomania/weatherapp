/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/mainstyles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/mainstyles.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ephesis&family=Urbanist:wght@100;300;400;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Urbanist', sans-serif;\n}\n\n.split {\n  display: flex;\n  flex-direction: row;\n}\n\n.split > * {\n  flex-basis: 100%;\n}\n\n.split > * + * {\n  margin-left: 0.5em;\n}\n\n.container {\n  margin: auto;\n  max-width: 400px;\n  padding: 0.5em 0.5em;\n}\n\n.form input {\n  margin: auto;\n  width: 90%;\n}\n#weather-container {\n  margin: auto;\n  max-width: 400px;\n  padding: 0.5em 0.5em;\n}\n\n#weather-text-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#weather-text p {\n  line-height: 1em;\n  font-size: 3em;\n  font-family: 'Ephesis', sans-serif;\n}\n\n#weather-city {\n  line-height: 1em;\n  font-size: 6em;\n}\n#weather-country {\n  max-width: 350px;\n  font-weight: 100;\n  line-height: 0.8em;\n  font-size: 3em;\n  align-self: flex-end;\n}\n\n#weather-numbers-container {\n  align-items: center;\n}\n#weather-temp {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#weather-temp p {\n  align-self: center;\n  font-size: 10em;\n  position: relative;\n}\n#weather-temp p::after {\n  content: '\\00b0';\n  position: absolute;\n  font-size: 0.5em;\n  right: -5%;\n}\n#weather-temp sup {\n  top: 10%;\n  right: 1%;\n  position: absolute;\n  font-size: 0.16em;\n}\n\n#weather-temp {\n  align-self: flex-start;\n}\n\n#weather-extras {\n  line-height: 1.5em;\n  padding-left: 5px;\n  font-size: 1.45em;\n  border-left: 5px solid purple;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/mainstyles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,6BAA6B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ephesis&family=Urbanist:wght@100;300;400;800&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Urbanist', sans-serif;\n}\n\n.split {\n  display: flex;\n  flex-direction: row;\n}\n\n.split > * {\n  flex-basis: 100%;\n}\n\n.split > * + * {\n  margin-left: 0.5em;\n}\n\n.container {\n  margin: auto;\n  max-width: 400px;\n  padding: 0.5em 0.5em;\n}\n\n.form input {\n  margin: auto;\n  width: 90%;\n}\n#weather-container {\n  margin: auto;\n  max-width: 400px;\n  padding: 0.5em 0.5em;\n}\n\n#weather-text-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#weather-text p {\n  line-height: 1em;\n  font-size: 3em;\n  font-family: 'Ephesis', sans-serif;\n}\n\n#weather-city {\n  line-height: 1em;\n  font-size: 6em;\n}\n#weather-country {\n  max-width: 350px;\n  font-weight: 100;\n  line-height: 0.8em;\n  font-size: 3em;\n  align-self: flex-end;\n}\n\n#weather-numbers-container {\n  align-items: center;\n}\n#weather-temp {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#weather-temp p {\n  align-self: center;\n  font-size: 10em;\n  position: relative;\n}\n#weather-temp p::after {\n  content: '\\00b0';\n  position: absolute;\n  font-size: 0.5em;\n  right: -5%;\n}\n#weather-temp sup {\n  top: 10%;\n  right: 1%;\n  position: absolute;\n  font-size: 0.16em;\n}\n\n#weather-temp {\n  align-self: flex-start;\n}\n\n#weather-extras {\n  line-height: 1.5em;\n  padding-left: 5px;\n  font-size: 1.45em;\n  border-left: 5px solid purple;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/fitty/dist/fitty.module.js":
/*!*************************************************!*\
  !*** ./node_modules/fitty/dist/fitty.module.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * fitty v2.3.5 - Snugly resizes text to fit its parent container
 * Copyright (c) 2021 Rik Schennink <rik@pqina.nl> (https://pqina.nl/)
 */

var e=function(e){if(e){var t=function(e){return[].slice.call(e)},n=0,i=1,r=2,o=3,a=[],l=null,u="requestAnimationFrame"in e?function(){e.cancelAnimationFrame(l),l=e.requestAnimationFrame((function(){return s(a.filter((function(e){return e.dirty&&e.active})))}))}:function(){},c=function(e){return function(){a.forEach((function(t){return t.dirty=e})),u()}},s=function(e){e.filter((function(e){return!e.styleComputed})).forEach((function(e){e.styleComputed=m(e)})),e.filter(y).forEach(v);var t=e.filter(p);t.forEach(d),t.forEach((function(e){v(e),f(e)})),t.forEach(S)},f=function(e){return e.dirty=n},d=function(e){e.availableWidth=e.element.parentNode.clientWidth,e.currentWidth=e.element.scrollWidth,e.previousFontSize=e.currentFontSize,e.currentFontSize=Math.min(Math.max(e.minSize,e.availableWidth/e.currentWidth*e.previousFontSize),e.maxSize),e.whiteSpace=e.multiLine&&e.currentFontSize===e.minSize?"normal":"nowrap"},p=function(e){return e.dirty!==r||e.dirty===r&&e.element.parentNode.clientWidth!==e.availableWidth},m=function(t){var n=e.getComputedStyle(t.element,null);return t.currentFontSize=parseFloat(n.getPropertyValue("font-size")),t.display=n.getPropertyValue("display"),t.whiteSpace=n.getPropertyValue("white-space"),!0},y=function(e){var t=!1;return!e.preStyleTestCompleted&&(/inline-/.test(e.display)||(t=!0,e.display="inline-block"),"nowrap"!==e.whiteSpace&&(t=!0,e.whiteSpace="nowrap"),e.preStyleTestCompleted=!0,t)},v=function(e){e.element.style.whiteSpace=e.whiteSpace,e.element.style.display=e.display,e.element.style.fontSize=e.currentFontSize+"px"},S=function(e){e.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:e.previousFontSize,newValue:e.currentFontSize,scaleFactor:e.currentFontSize/e.previousFontSize}}))},h=function(e,t){return function(){e.dirty=t,e.active&&u()}},w=function(e){return function(){a=a.filter((function(t){return t.element!==e.element})),e.observeMutations&&e.observer.disconnect(),e.element.style.whiteSpace=e.originalStyle.whiteSpace,e.element.style.display=e.originalStyle.display,e.element.style.fontSize=e.originalStyle.fontSize}},b=function(e){return function(){e.active||(e.active=!0,u())}},z=function(e){return function(){return e.active=!1}},F=function(e){e.observeMutations&&(e.observer=new MutationObserver(h(e,i)),e.observer.observe(e.element,e.observeMutations))},g={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in e&&{subtree:!0,childList:!0,characterData:!0}},W=null,E=function(){e.clearTimeout(W),W=e.setTimeout(c(r),x.observeWindowDelay)},M=["resize","orientationchange"];return Object.defineProperty(x,"observeWindow",{set:function(t){var n="".concat(t?"add":"remove","EventListener");M.forEach((function(t){e[n](t,E)}))}}),x.observeWindow=!0,x.observeWindowDelay=100,x.fitAll=c(o),x}function C(e,t){var n=Object.assign({},g,t),i=e.map((function(e){var t=Object.assign({},n,{element:e,active:!0});return function(e){e.originalStyle={whiteSpace:e.element.style.whiteSpace,display:e.element.style.display,fontSize:e.element.style.fontSize},F(e),e.newbie=!0,e.dirty=!0,a.push(e)}(t),{element:e,fit:h(t,o),unfreeze:b(t),freeze:z(t),unsubscribe:w(t)}}));return u(),i}function x(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e?C(t(document.querySelectorAll(e)),n):C([e],n)[0]}}("undefined"==typeof window?null:window);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);


/***/ }),

/***/ "./src/styles/mainstyles.css":
/*!***********************************!*\
  !*** ./src/styles/mainstyles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js */ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainstyles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mainstyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/mainstyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

;
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainstyles_css__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainstyles_css__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_mainstyles_css__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mainstyles_css__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js":
/*!************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js ***!
  \************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join("\n");
  };
}();
/* istanbul ignore next  */


function apply(styleElement, index, remove, obj) {
  var css;

  if (remove) {
    css = "";
  } else {
    css = "";

    if (obj.supports) {
      css += "@supports (".concat(obj.supports, ") {");
    }

    if (obj.media) {
      css += "@media ".concat(obj.media, " {");
    }

    var needLayer = typeof obj.layer !== "undefined";

    if (needLayer) {
      css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    }

    css += obj.css;

    if (needLayer) {
      css += "}";
    }

    if (obj.media) {
      css += "}";
    }

    if (obj.supports) {
      css += "}";
    }
  } // For old IE

  /* istanbul ignore if  */


  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = styleElement.childNodes;

    if (childNodes[index]) {
      styleElement.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index]);
    } else {
      styleElement.appendChild(cssNode);
    }
  }
}

var singletonData = {
  singleton: null,
  singletonCounter: 0
};
/* istanbul ignore next  */

function domAPI(options) {
  // eslint-disable-next-line no-undef,no-use-before-define
  var styleIndex = singletonData.singletonCounter++;
  var styleElement = // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton || (singletonData.singleton = options.insertStyleElement(options));
  return {
    update: function update(obj) {
      apply(styleElement, styleIndex, false, obj);
    },
    remove: function remove(obj) {
      apply(styleElement, styleIndex, true, obj);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/modules/citylookahead.js":
/*!**************************************!*\
  !*** ./src/modules/citylookahead.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cities": () => (/* binding */ cities),
/* harmony export */   "countries": () => (/* binding */ countries)
/* harmony export */ });
const searchInput = document.querySelector('.test-input');
const dataList = document.getElementById('datalist');

let cities;
let countries;

fetch('./cities.json')
  .then((response) => response.json())
  .then((data) => (cities = data));

fetch('./countries.json')
  .then((response) => response.json())
  .then((data) => (countries = data));

document.querySelector('.test').addEventListener('click', (e) => {
  console.log();
});

function findMatches(wordToMatch, city) {
  return city.filter((place) => {
    if (place.name === null || place.country === null) {
      return false;
    }
    const regex = new RegExp(wordToMatch, 'gi');
    return place.name.match(regex) || place.country.match(regex);
  });
}

function displayMatches() {
  const matches = findMatches(this.value, cities);
  matches.sort((a, b) => {
    return a.name - b.name;
  });
  matches.length = 11;
  dataList.innerHTML = '';
  matches.forEach((e) => {
    dataList.appendChild(addOption(e));
  });
}

function addOption(object) {
  let text;
  if (object.state === '') {
    text = `${object.name}, ${object.country}`;
  } else {
    text = `${object.name}, ${object.state}, ${object.country}`;
  }
  const option = document.createElement('option');
  option.setAttribute('data-value', object.id);
  option.innerText = text;

  return option;
}

searchInput.addEventListener('input', displayMatches);


/***/ }),

/***/ "./src/modules/weatherapi.js":
/*!***********************************!*\
  !*** ./src/modules/weatherapi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeather": () => (/* binding */ fetchWeather),
/* harmony export */   "randomFunction": () => (/* binding */ randomFunction)
/* harmony export */ });
const apiKey = '9284a5fa45d0baaa8a5c7166b862b744';

const fetchWeather = async (locationArray) => {
  let location;
  if (locationArray.length === 2) {
    location = `${locationArray[0]},${locationArray[1]}`;
  } else if (locationArray.length === 3) {
    location = `${locationArray[0]},${locationArray[1]}, ${locationArray[2]}`;
  } else {
    location = locationArray;
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`,
    {
      mode: 'cors',
    }
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const weatherData = await response.json();
  return weatherData;
};

const randomFunction = () => {
  console.log('random function');
};




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fitty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fitty */ "./node_modules/fitty/dist/fitty.module.js");
/* harmony import */ var _modules_weatherapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weatherapi */ "./src/modules/weatherapi.js");
/* harmony import */ var _modules_citylookahead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/citylookahead */ "./src/modules/citylookahead.js");
/* harmony import */ var _styles_mainstyles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/mainstyles.css */ "./src/styles/mainstyles.css");







let weatherData;

const form = document.querySelector('.form');
const weatherDiv = document.querySelector('.weather');

// html elements to fill in
const weatherText = document.querySelector('#weather-text p');
const weatherCity = document.querySelector('#weather-city p');
const weatherCountry = document.querySelector('#weather-country p');
const weatherTemp = document.querySelector('#weather-temp p');
const weatherFeels = document.querySelector('#weather-feels p');
const weatherWind = document.querySelector('#weather-wind p');
const weatherHumidity = document.querySelector('#weather-rain p');

(0,fitty__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherCity, { maxSize: 100 });
(0,fitty__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherCountry, { maxSize: 200 });

function weatherObjectCreator(param) {
  const object = {
    weather: param.weather,
    location: param.name,
    wind: param.wind,
    main: param.main,
    cloud: param.clouds,
    country: param.sys.country,
    humidity: param.main.humidity,
  };

  return object;
}

function printWeather(weather) {
  function updateCountry() {
    const countryname = _modules_citylookahead__WEBPACK_IMPORTED_MODULE_2__.countries.find((e) => e['alpha-2'] === weather.country);
    return countryname.name;
  }

  weatherCity.innerText = weather.location;
  weatherText.innerText = weather.weather[0].description;
  weatherCountry.innerText = updateCountry();
  weatherTemp.innerText = Math.trunc(weather.main.temp);
  weatherFeels.innerText = `Feels like: ${weather.main.feels_like}`;
  weatherWind.innerText = `Wind: ${weather.wind.speed} km/h`;
  weatherHumidity.innerText = `Humidity: ${weather.humidity}`;
}
function handleSubmit(event) {
  event.preventDefault();
  const inputValueArray = event.path[0][0].value.split(', ');
  (0,_modules_weatherapi__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(inputValueArray)
    .then((data) => {
      weatherData = weatherObjectCreator(data);
      console.log(weatherData);
      printWeather(weatherData);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

form.addEventListener('submit', handleSubmit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQzBDO0FBQ25DO0FBQ0E7O0FBRTJCOztBQUU1RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQUssZ0JBQWdCLGNBQWM7QUFDbkMsaURBQUssbUJBQW1CLGNBQWM7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrRUFBYztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHdCQUF3QjtBQUNsRSxtQ0FBbUMsb0JBQW9CO0FBQ3ZELDJDQUEyQyxpQkFBaUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL21haW5zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2ZpdHR5L2Rpc3QvZml0dHkubW9kdWxlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL21haW5zdHlsZXMuY3NzP2IxOGIiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NpbmdsZXRvblN0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy9jaXR5bG9va2FoZWFkLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVwaGVzaXMmZmFtaWx5PVVyYmFuaXN0OndnaHRAMTAwOzMwMDs0MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1VyYmFuaXN0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNwbGl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc3BsaXQgPiAqIHtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5zcGxpdCA+ICogKyAqIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogMC41ZW0gMC41ZW07XFxufVxcblxcbi5mb3JtIGlucHV0IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxufVxcbiN3ZWF0aGVyLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogMC41ZW0gMC41ZW07XFxufVxcblxcbiN3ZWF0aGVyLXRleHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jd2VhdGhlci10ZXh0IHAge1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgZm9udC1mYW1pbHk6ICdFcGhlc2lzJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3dlYXRoZXItY2l0eSB7XFxuICBsaW5lLWhlaWdodDogMWVtO1xcbiAgZm9udC1zaXplOiA2ZW07XFxufVxcbiN3ZWF0aGVyLWNvdW50cnkge1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBsaW5lLWhlaWdodDogMC44ZW07XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4jd2VhdGhlci1udW1iZXJzLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jd2VhdGhlci10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiN3ZWF0aGVyLXRlbXAgcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiN3ZWF0aGVyLXRlbXAgcDo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwwMGIwJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICByaWdodDogLTUlO1xcbn1cXG4jd2VhdGhlci10ZW1wIHN1cCB7XFxuICB0b3A6IDEwJTtcXG4gIHJpZ2h0OiAxJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC4xNmVtO1xcbn1cXG5cXG4jd2VhdGhlci10ZW1wIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiN3ZWF0aGVyLWV4dHJhcyB7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS40NWVtO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBwdXJwbGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbnN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FcGhlc2lzJmZhbWlseT1VcmJhbmlzdDp3Z2h0QDEwMDszMDA7NDAwOzgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdVcmJhbmlzdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zcGxpdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNwbGl0ID4gKiB7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbn1cXG5cXG4uc3BsaXQgPiAqICsgKiB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xcbn1cXG5cXG4uZm9ybSBpbnB1dCB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbn1cXG4jd2VhdGhlci1jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xcbn1cXG5cXG4jd2VhdGhlci10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3dlYXRoZXItdGV4dCBwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRXBoZXNpcycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiN3ZWF0aGVyLWNpdHkge1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIGZvbnQtc2l6ZTogNmVtO1xcbn1cXG4jd2VhdGhlci1jb3VudHJ5IHtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDAuOGVtO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuI3dlYXRoZXItbnVtYmVycy1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jd2VhdGhlci10ZW1wIHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jd2VhdGhlci10ZW1wIHA6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDBiMCc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgcmlnaHQ6IC01JTtcXG59XFxuI3dlYXRoZXItdGVtcCBzdXAge1xcbiAgdG9wOiAxMCU7XFxuICByaWdodDogMSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuMTZlbTtcXG59XFxuXFxuI3dlYXRoZXItdGVtcCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jd2VhdGhlci1leHRyYXMge1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBmb250LXNpemU6IDEuNDVlbTtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcHVycGxlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIGZpdHR5IHYyLjMuNSAtIFNudWdseSByZXNpemVzIHRleHQgdG8gZml0IGl0cyBwYXJlbnQgY29udGFpbmVyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgUmlrIFNjaGVubmluayA8cmlrQHBxaW5hLm5sPiAoaHR0cHM6Ly9wcWluYS5ubC8pXG4gKi9cblxudmFyIGU9ZnVuY3Rpb24oZSl7aWYoZSl7dmFyIHQ9ZnVuY3Rpb24oZSl7cmV0dXJuW10uc2xpY2UuY2FsbChlKX0sbj0wLGk9MSxyPTIsbz0zLGE9W10sbD1udWxsLHU9XCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcImluIGU/ZnVuY3Rpb24oKXtlLmNhbmNlbEFuaW1hdGlvbkZyYW1lKGwpLGw9ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmV0dXJuIHMoYS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmRpcnR5JiZlLmFjdGl2ZX0pKSl9KSl9OmZ1bmN0aW9uKCl7fSxjPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe2EuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQuZGlydHk9ZX0pKSx1KCl9fSxzPWZ1bmN0aW9uKGUpe2UuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4hZS5zdHlsZUNvbXB1dGVkfSkpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2Uuc3R5bGVDb21wdXRlZD1tKGUpfSkpLGUuZmlsdGVyKHkpLmZvckVhY2godik7dmFyIHQ9ZS5maWx0ZXIocCk7dC5mb3JFYWNoKGQpLHQuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dihlKSxmKGUpfSkpLHQuZm9yRWFjaChTKX0sZj1mdW5jdGlvbihlKXtyZXR1cm4gZS5kaXJ0eT1ufSxkPWZ1bmN0aW9uKGUpe2UuYXZhaWxhYmxlV2lkdGg9ZS5lbGVtZW50LnBhcmVudE5vZGUuY2xpZW50V2lkdGgsZS5jdXJyZW50V2lkdGg9ZS5lbGVtZW50LnNjcm9sbFdpZHRoLGUucHJldmlvdXNGb250U2l6ZT1lLmN1cnJlbnRGb250U2l6ZSxlLmN1cnJlbnRGb250U2l6ZT1NYXRoLm1pbihNYXRoLm1heChlLm1pblNpemUsZS5hdmFpbGFibGVXaWR0aC9lLmN1cnJlbnRXaWR0aCplLnByZXZpb3VzRm9udFNpemUpLGUubWF4U2l6ZSksZS53aGl0ZVNwYWNlPWUubXVsdGlMaW5lJiZlLmN1cnJlbnRGb250U2l6ZT09PWUubWluU2l6ZT9cIm5vcm1hbFwiOlwibm93cmFwXCJ9LHA9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZGlydHkhPT1yfHxlLmRpcnR5PT09ciYmZS5lbGVtZW50LnBhcmVudE5vZGUuY2xpZW50V2lkdGghPT1lLmF2YWlsYWJsZVdpZHRofSxtPWZ1bmN0aW9uKHQpe3ZhciBuPWUuZ2V0Q29tcHV0ZWRTdHlsZSh0LmVsZW1lbnQsbnVsbCk7cmV0dXJuIHQuY3VycmVudEZvbnRTaXplPXBhcnNlRmxvYXQobi5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udC1zaXplXCIpKSx0LmRpc3BsYXk9bi5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSx0LndoaXRlU3BhY2U9bi5nZXRQcm9wZXJ0eVZhbHVlKFwid2hpdGUtc3BhY2VcIiksITB9LHk9ZnVuY3Rpb24oZSl7dmFyIHQ9ITE7cmV0dXJuIWUucHJlU3R5bGVUZXN0Q29tcGxldGVkJiYoL2lubGluZS0vLnRlc3QoZS5kaXNwbGF5KXx8KHQ9ITAsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpLFwibm93cmFwXCIhPT1lLndoaXRlU3BhY2UmJih0PSEwLGUud2hpdGVTcGFjZT1cIm5vd3JhcFwiKSxlLnByZVN0eWxlVGVzdENvbXBsZXRlZD0hMCx0KX0sdj1mdW5jdGlvbihlKXtlLmVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZT1lLndoaXRlU3BhY2UsZS5lbGVtZW50LnN0eWxlLmRpc3BsYXk9ZS5kaXNwbGF5LGUuZWxlbWVudC5zdHlsZS5mb250U2l6ZT1lLmN1cnJlbnRGb250U2l6ZStcInB4XCJ9LFM9ZnVuY3Rpb24oZSl7ZS5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZml0XCIse2RldGFpbDp7b2xkVmFsdWU6ZS5wcmV2aW91c0ZvbnRTaXplLG5ld1ZhbHVlOmUuY3VycmVudEZvbnRTaXplLHNjYWxlRmFjdG9yOmUuY3VycmVudEZvbnRTaXplL2UucHJldmlvdXNGb250U2l6ZX19KSl9LGg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmRpcnR5PXQsZS5hY3RpdmUmJnUoKX19LHc9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7YT1hLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQuZWxlbWVudCE9PWUuZWxlbWVudH0pKSxlLm9ic2VydmVNdXRhdGlvbnMmJmUub2JzZXJ2ZXIuZGlzY29ubmVjdCgpLGUuZWxlbWVudC5zdHlsZS53aGl0ZVNwYWNlPWUub3JpZ2luYWxTdHlsZS53aGl0ZVNwYWNlLGUuZWxlbWVudC5zdHlsZS5kaXNwbGF5PWUub3JpZ2luYWxTdHlsZS5kaXNwbGF5LGUuZWxlbWVudC5zdHlsZS5mb250U2l6ZT1lLm9yaWdpbmFsU3R5bGUuZm9udFNpemV9fSxiPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe2UuYWN0aXZlfHwoZS5hY3RpdmU9ITAsdSgpKX19LHo9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuYWN0aXZlPSExfX0sRj1mdW5jdGlvbihlKXtlLm9ic2VydmVNdXRhdGlvbnMmJihlLm9ic2VydmVyPW5ldyBNdXRhdGlvbk9ic2VydmVyKGgoZSxpKSksZS5vYnNlcnZlci5vYnNlcnZlKGUuZWxlbWVudCxlLm9ic2VydmVNdXRhdGlvbnMpKX0sZz17bWluU2l6ZToxNixtYXhTaXplOjUxMixtdWx0aUxpbmU6ITAsb2JzZXJ2ZU11dGF0aW9uczpcIk11dGF0aW9uT2JzZXJ2ZXJcImluIGUmJntzdWJ0cmVlOiEwLGNoaWxkTGlzdDohMCxjaGFyYWN0ZXJEYXRhOiEwfX0sVz1udWxsLEU9ZnVuY3Rpb24oKXtlLmNsZWFyVGltZW91dChXKSxXPWUuc2V0VGltZW91dChjKHIpLHgub2JzZXJ2ZVdpbmRvd0RlbGF5KX0sTT1bXCJyZXNpemVcIixcIm9yaWVudGF0aW9uY2hhbmdlXCJdO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoeCxcIm9ic2VydmVXaW5kb3dcIix7c2V0OmZ1bmN0aW9uKHQpe3ZhciBuPVwiXCIuY29uY2F0KHQ/XCJhZGRcIjpcInJlbW92ZVwiLFwiRXZlbnRMaXN0ZW5lclwiKTtNLmZvckVhY2goKGZ1bmN0aW9uKHQpe2Vbbl0odCxFKX0pKX19KSx4Lm9ic2VydmVXaW5kb3c9ITAseC5vYnNlcnZlV2luZG93RGVsYXk9MTAwLHguZml0QWxsPWMobykseH1mdW5jdGlvbiBDKGUsdCl7dmFyIG49T2JqZWN0LmFzc2lnbih7fSxnLHQpLGk9ZS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PU9iamVjdC5hc3NpZ24oe30sbix7ZWxlbWVudDplLGFjdGl2ZTohMH0pO3JldHVybiBmdW5jdGlvbihlKXtlLm9yaWdpbmFsU3R5bGU9e3doaXRlU3BhY2U6ZS5lbGVtZW50LnN0eWxlLndoaXRlU3BhY2UsZGlzcGxheTplLmVsZW1lbnQuc3R5bGUuZGlzcGxheSxmb250U2l6ZTplLmVsZW1lbnQuc3R5bGUuZm9udFNpemV9LEYoZSksZS5uZXdiaWU9ITAsZS5kaXJ0eT0hMCxhLnB1c2goZSl9KHQpLHtlbGVtZW50OmUsZml0OmgodCxvKSx1bmZyZWV6ZTpiKHQpLGZyZWV6ZTp6KHQpLHVuc3Vic2NyaWJlOncodCl9fSkpO3JldHVybiB1KCksaX1mdW5jdGlvbiB4KGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9DKHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlKSksbik6QyhbZV0sbilbMF19fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93P251bGw6d2luZG93KTtleHBvcnQgZGVmYXVsdCBlO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2luZ2xldG9uU3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbnN0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpO1xuICB9O1xufSgpO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcztcblxuICBpZiAocmVtb3ZlKSB7XG4gICAgY3NzID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBjc3MgPSBcIlwiO1xuXG4gICAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgICB9XG5cbiAgICBpZiAob2JqLm1lZGlhKSB7XG4gICAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgICB9XG5cbiAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgICB9XG5cbiAgICBjc3MgKz0gb2JqLmNzcztcblxuICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgIGNzcyArPSBcIn1cIjtcbiAgICB9XG5cbiAgICBpZiAob2JqLm1lZGlhKSB7XG4gICAgICBjc3MgKz0gXCJ9XCI7XG4gICAgfVxuXG4gICAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgICAgY3NzICs9IFwifVwiO1xuICAgIH1cbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbkRhdGEgPSB7XG4gIHNpbmdsZXRvbjogbnVsbCxcbiAgc2luZ2xldG9uQ291bnRlcjogMFxufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWYsbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25EYXRhLnNpbmdsZXRvbkNvdW50ZXIrKztcbiAgdmFyIHN0eWxlRWxlbWVudCA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZixuby11c2UtYmVmb3JlLWRlZmluZVxuICBzaW5nbGV0b25EYXRhLnNpbmdsZXRvbiB8fCAoc2luZ2xldG9uRGF0YS5zaW5nbGV0b24gPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUsIG9iaik7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0LWlucHV0Jyk7XG5jb25zdCBkYXRhTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhbGlzdCcpO1xuXG5leHBvcnQgbGV0IGNpdGllcztcbmV4cG9ydCBsZXQgY291bnRyaWVzO1xuXG5mZXRjaCgnLi9jaXRpZXMuanNvbicpXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4gKGNpdGllcyA9IGRhdGEpKTtcblxuZmV0Y2goJy4vY291bnRyaWVzLmpzb24nKVxuICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKGRhdGEpID0+IChjb3VudHJpZXMgPSBkYXRhKSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZygpO1xufSk7XG5cbmZ1bmN0aW9uIGZpbmRNYXRjaGVzKHdvcmRUb01hdGNoLCBjaXR5KSB7XG4gIHJldHVybiBjaXR5LmZpbHRlcigocGxhY2UpID0+IHtcbiAgICBpZiAocGxhY2UubmFtZSA9PT0gbnVsbCB8fCBwbGFjZS5jb3VudHJ5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh3b3JkVG9NYXRjaCwgJ2dpJyk7XG4gICAgcmV0dXJuIHBsYWNlLm5hbWUubWF0Y2gocmVnZXgpIHx8IHBsYWNlLmNvdW50cnkubWF0Y2gocmVnZXgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1hdGNoZXMoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBmaW5kTWF0Y2hlcyh0aGlzLnZhbHVlLCBjaXRpZXMpO1xuICBtYXRjaGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYS5uYW1lIC0gYi5uYW1lO1xuICB9KTtcbiAgbWF0Y2hlcy5sZW5ndGggPSAxMTtcbiAgZGF0YUxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIG1hdGNoZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGFkZE9wdGlvbihlKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRPcHRpb24ob2JqZWN0KSB7XG4gIGxldCB0ZXh0O1xuICBpZiAob2JqZWN0LnN0YXRlID09PSAnJykge1xuICAgIHRleHQgPSBgJHtvYmplY3QubmFtZX0sICR7b2JqZWN0LmNvdW50cnl9YDtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0ID0gYCR7b2JqZWN0Lm5hbWV9LCAke29iamVjdC5zdGF0ZX0sICR7b2JqZWN0LmNvdW50cnl9YDtcbiAgfVxuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIG9iamVjdC5pZCk7XG4gIG9wdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xuXG4gIHJldHVybiBvcHRpb247XG59XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZGlzcGxheU1hdGNoZXMpO1xuIiwiY29uc3QgYXBpS2V5ID0gJzkyODRhNWZhNDVkMGJhYWE4YTVjNzE2NmI4NjJiNzQ0JztcblxuY29uc3QgZmV0Y2hXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uQXJyYXkpID0+IHtcbiAgbGV0IGxvY2F0aW9uO1xuICBpZiAobG9jYXRpb25BcnJheS5sZW5ndGggPT09IDIpIHtcbiAgICBsb2NhdGlvbiA9IGAke2xvY2F0aW9uQXJyYXlbMF19LCR7bG9jYXRpb25BcnJheVsxXX1gO1xuICB9IGVsc2UgaWYgKGxvY2F0aW9uQXJyYXkubGVuZ3RoID09PSAzKSB7XG4gICAgbG9jYXRpb24gPSBgJHtsb2NhdGlvbkFycmF5WzBdfSwke2xvY2F0aW9uQXJyYXlbMV19LCAke2xvY2F0aW9uQXJyYXlbMl19YDtcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uQXJyYXk7XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9bWV0cmljYCxcbiAgICB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgfVxuICApO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYEFuIGVycm9yIGhhcyBvY2N1cmVkOiAke3Jlc3BvbnNlLnN0YXR1c31gO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuY29uc3QgcmFuZG9tRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdyYW5kb20gZnVuY3Rpb24nKTtcbn07XG5cbmV4cG9ydCB7IGZldGNoV2VhdGhlciwgcmFuZG9tRnVuY3Rpb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZml0dHkgZnJvbSAnZml0dHknO1xuaW1wb3J0IHsgcmFuZG9tRnVuY3Rpb24sIGZldGNoV2VhdGhlciB9IGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyYXBpJztcbmltcG9ydCAnLi9tb2R1bGVzL2NpdHlsb29rYWhlYWQnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluc3R5bGVzLmNzcyc7XG5cbmltcG9ydCB7IGNpdGllcywgY291bnRyaWVzIH0gZnJvbSAnLi9tb2R1bGVzL2NpdHlsb29rYWhlYWQnO1xuXG5sZXQgd2VhdGhlckRhdGE7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuY29uc3Qgd2VhdGhlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyJyk7XG5cbi8vIGh0bWwgZWxlbWVudHMgdG8gZmlsbCBpblxuY29uc3Qgd2VhdGhlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci10ZXh0IHAnKTtcbmNvbnN0IHdlYXRoZXJDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItY2l0eSBwJyk7XG5jb25zdCB3ZWF0aGVyQ291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWNvdW50cnkgcCcpO1xuY29uc3Qgd2VhdGhlclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci10ZW1wIHAnKTtcbmNvbnN0IHdlYXRoZXJGZWVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWZlZWxzIHAnKTtcbmNvbnN0IHdlYXRoZXJXaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItd2luZCBwJyk7XG5jb25zdCB3ZWF0aGVySHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1yYWluIHAnKTtcblxuZml0dHkod2VhdGhlckNpdHksIHsgbWF4U2l6ZTogMTAwIH0pO1xuZml0dHkod2VhdGhlckNvdW50cnksIHsgbWF4U2l6ZTogMjAwIH0pO1xuXG5mdW5jdGlvbiB3ZWF0aGVyT2JqZWN0Q3JlYXRvcihwYXJhbSkge1xuICBjb25zdCBvYmplY3QgPSB7XG4gICAgd2VhdGhlcjogcGFyYW0ud2VhdGhlcixcbiAgICBsb2NhdGlvbjogcGFyYW0ubmFtZSxcbiAgICB3aW5kOiBwYXJhbS53aW5kLFxuICAgIG1haW46IHBhcmFtLm1haW4sXG4gICAgY2xvdWQ6IHBhcmFtLmNsb3VkcyxcbiAgICBjb3VudHJ5OiBwYXJhbS5zeXMuY291bnRyeSxcbiAgICBodW1pZGl0eTogcGFyYW0ubWFpbi5odW1pZGl0eSxcbiAgfTtcblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBwcmludFdlYXRoZXIod2VhdGhlcikge1xuICBmdW5jdGlvbiB1cGRhdGVDb3VudHJ5KCkge1xuICAgIGNvbnN0IGNvdW50cnluYW1lID0gY291bnRyaWVzLmZpbmQoKGUpID0+IGVbJ2FscGhhLTInXSA9PT0gd2VhdGhlci5jb3VudHJ5KTtcbiAgICByZXR1cm4gY291bnRyeW5hbWUubmFtZTtcbiAgfVxuXG4gIHdlYXRoZXJDaXR5LmlubmVyVGV4dCA9IHdlYXRoZXIubG9jYXRpb247XG4gIHdlYXRoZXJUZXh0LmlubmVyVGV4dCA9IHdlYXRoZXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgd2VhdGhlckNvdW50cnkuaW5uZXJUZXh0ID0gdXBkYXRlQ291bnRyeSgpO1xuICB3ZWF0aGVyVGVtcC5pbm5lclRleHQgPSBNYXRoLnRydW5jKHdlYXRoZXIubWFpbi50ZW1wKTtcbiAgd2VhdGhlckZlZWxzLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlOiAke3dlYXRoZXIubWFpbi5mZWVsc19saWtlfWA7XG4gIHdlYXRoZXJXaW5kLmlubmVyVGV4dCA9IGBXaW5kOiAke3dlYXRoZXIud2luZC5zcGVlZH0ga20vaGA7XG4gIHdlYXRoZXJIdW1pZGl0eS5pbm5lclRleHQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlci5odW1pZGl0eX1gO1xufVxuZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0VmFsdWVBcnJheSA9IGV2ZW50LnBhdGhbMF1bMF0udmFsdWUuc3BsaXQoJywgJyk7XG4gIGZldGNoV2VhdGhlcihpbnB1dFZhbHVlQXJyYXkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHdlYXRoZXJEYXRhID0gd2VhdGhlck9iamVjdENyZWF0b3IoZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICBwcmludFdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgfSk7XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==