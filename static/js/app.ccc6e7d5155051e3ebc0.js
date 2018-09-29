webpackJsonp([1],{

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(564)
}
var Component = __webpack_require__(87)(
  /* script */
  __webpack_require__(258),
  /* template */
  __webpack_require__(574),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1c478340",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_boot_page__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_boot_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_boot_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_scenes_one__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_scenes_one___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_scenes_one__);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'BootPage',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_boot_page___default.a
  }, {
    path: '/scenes-1',
    name: 'scenesOne',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_scenes_one___default.a
  }],
  linkActiveClass: 'active'
}));

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(566)
}
var Component = __webpack_require__(87)(
  /* script */
  __webpack_require__(257),
  /* template */
  __webpack_require__(576),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-53c6d8e7",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'component_name',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
});

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_navBar_navBar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_navBar_navBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_navBar_navBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_bg_jpeg__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_bg_jpeg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_bg_jpeg__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bootPage',
  data() {
    return {
      msg: 'Welcome to 金融小场景',
      imgsrc: __WEBPACK_IMPORTED_MODULE_1__static_bg_jpeg___default.a
    };
  },
  components: {
    navBar: __WEBPACK_IMPORTED_MODULE_0_components_navBar_navBar___default.a
  }
});

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_navBar_navBar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_navBar_navBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_navBar_navBar__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'scenes-1',
  data() {
    return {
      msg: '欢迎来到jusfoun'
    };
  },
  components: {
    navBar: __WEBPACK_IMPORTED_MODULE_0_components_navBar_navBar___default.a
  }
});

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_css_index_sass__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_css_index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_css_index_sass__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




/*引入element ui 相关*/




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$echarts = __WEBPACK_IMPORTED_MODULE_3_echarts___default.a;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_element_ui___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bg.254648b.jpeg";

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(565)
}
var Component = __webpack_require__(87)(
  /* script */
  __webpack_require__(259),
  /* template */
  __webpack_require__(575),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-537509a8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(567)
}
var Component = __webpack_require__(87)(
  /* script */
  __webpack_require__(260),
  /* template */
  __webpack_require__(577),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6cb511f8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav-bar-wrapper"
  }, [_c('ul', [_c('router-link', {
    staticClass: "item",
    attrs: {
      "tag": "li",
      "to": {
        name: 'BootPage'
      }
    }
  }, [_vm._v("路由1")]), _vm._v(" "), _c('router-link', {
    staticClass: "item",
    attrs: {
      "tag": "li",
      "to": {
        name: 'scenesOne'
      }
    }
  }, [_vm._v("路由2")])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "boot-page"
  }, [_c('navBar'), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": _vm.imgsrc
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app",
    attrs: {
      "id": "app"
    }
  }, [_c('header', [_vm._v("\n    header\n  ")]), _vm._v(" "), _c('router-view', {
    staticClass: "main"
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "scenes-one"
  }, [_c('navBar'), _vm._v(" "), _c('div', {
    staticClass: "bg1"
  })], 1)
},staticRenderFns: []}

/***/ })

},[261]);
//# sourceMappingURL=app.ccc6e7d5155051e3ebc0.js.map