(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-first-module"],{

/***/ "./src/app/first/first-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/first/first-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FirstRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstRoutingModule", function() { return FirstRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first.component */ "./src/app/first/first.component.ts");




var routes = [
    {
        path: '',
        component: _first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"],
        redirectTo: '1',
        pathMatch: 'full'
    },
    {
        path: ':firstnumber',
        component: _first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"],
        children: [
            { path: 'second', loadChildren: './second/second.module#SecondModule' }
        ]
    }
];
var FirstRoutingModule = /** @class */ (function () {
    function FirstRoutingModule() {
    }
    FirstRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FirstRoutingModule);
    return FirstRoutingModule;
}());



/***/ }),

/***/ "./src/app/first/first.component.html":
/*!********************************************!*\
  !*** ./src/app/first/first.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  first works!\n</p>\n"

/***/ }),

/***/ "./src/app/first/first.component.scss":
/*!********************************************!*\
  !*** ./src/app/first/first.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0L2ZpcnN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/first/first.component.ts":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FirstComponent = /** @class */ (function () {
    function FirstComponent(router, route) {
        this.router = router;
        this.route = route;
        console.log(this.router);
        console.log(this.route);
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ./first.component.scss */ "./src/app/first/first.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/first/first.module.ts":
/*!***************************************!*\
  !*** ./src/app/first/first.module.ts ***!
  \***************************************/
/*! exports provided: FirstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstModule", function() { return FirstModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _first_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first-routing.module */ "./src/app/first/first-routing.module.ts");
/* harmony import */ var _first_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first.component */ "./src/app/first/first.component.ts");





var FirstModule = /** @class */ (function () {
    function FirstModule() {
    }
    FirstModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_first_component__WEBPACK_IMPORTED_MODULE_4__["FirstComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _first_routing_module__WEBPACK_IMPORTED_MODULE_3__["FirstRoutingModule"]
            ],
            exports: [_first_component__WEBPACK_IMPORTED_MODULE_4__["FirstComponent"]]
        })
    ], FirstModule);
    return FirstModule;
}());



/***/ })

}]);
//# sourceMappingURL=first-first-module.js.map