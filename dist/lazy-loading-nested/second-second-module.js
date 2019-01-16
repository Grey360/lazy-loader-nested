(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["second-second-module"],{

/***/ "./src/app/first/second/second-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/first/second/second-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SecondRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondRoutingModule", function() { return SecondRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _second_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second.component */ "./src/app/first/second/second.component.ts");




var routes = [
    {
        path: '',
        component: _second_component__WEBPACK_IMPORTED_MODULE_3__["SecondComponent"],
        redirectTo: '2/3',
        pathMatch: 'full'
    },
    {
        path: ':secondnumber/:thirdnumber',
        component: _second_component__WEBPACK_IMPORTED_MODULE_3__["SecondComponent"],
    }
];
var SecondRoutingModule = /** @class */ (function () {
    function SecondRoutingModule() {
    }
    SecondRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SecondRoutingModule);
    return SecondRoutingModule;
}());



/***/ }),

/***/ "./src/app/first/second/second.component.html":
/*!****************************************************!*\
  !*** ./src/app/first/second/second.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  second works!\n</p>\n"

/***/ }),

/***/ "./src/app/first/second/second.component.scss":
/*!****************************************************!*\
  !*** ./src/app/first/second/second.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0L3NlY29uZC9zZWNvbmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/first/second/second.component.ts":
/*!**************************************************!*\
  !*** ./src/app/first/second/second.component.ts ***!
  \**************************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SecondComponent = /** @class */ (function () {
    function SecondComponent(router, route) {
        this.router = router;
        this.route = route;
        console.log(this.router);
        console.log(this.route);
    }
    SecondComponent.prototype.ngOnInit = function () {
    };
    SecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/first/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.scss */ "./src/app/first/second/second.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/first/second/second.module.ts":
/*!***********************************************!*\
  !*** ./src/app/first/second/second.module.ts ***!
  \***********************************************/
/*! exports provided: SecondModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondModule", function() { return SecondModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _second_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second-routing.module */ "./src/app/first/second/second-routing.module.ts");
/* harmony import */ var _second_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./second.component */ "./src/app/first/second/second.component.ts");





var SecondModule = /** @class */ (function () {
    function SecondModule() {
    }
    SecondModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_second_component__WEBPACK_IMPORTED_MODULE_4__["SecondComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _second_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecondRoutingModule"]
            ],
            exports: [_second_component__WEBPACK_IMPORTED_MODULE_4__["SecondComponent"]]
        })
    ], SecondModule);
    return SecondModule;
}());



/***/ })

}]);
//# sourceMappingURL=second-second-module.js.map