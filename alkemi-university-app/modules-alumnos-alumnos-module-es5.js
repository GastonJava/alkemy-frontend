(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-alumnos-alumnos-module"],{

/***/ "./src/app/modules/alumnos/alumnos-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/alumnos/alumnos-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AlumnosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnosRoutingModule", function() { return AlumnosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: 'consultarmateria', loadChildren: function () { return Promise.all(/*! import() | alumno-consultar-alumno-consultar-module */[__webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~41eedd00"), __webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~65087715"), __webpack_require__.e("alumno-consultar-alumno-consultar-module")]).then(__webpack_require__.bind(null, /*! ./alumno-consultar/alumno-consultar.module */ "./src/app/modules/alumnos/alumno-consultar/alumno-consultar.module.ts")).then(function (m) { return m.AlumnoConsultarModule; }); } },
    { path: '', redirectTo: 'consultarmateria', pathMatch: 'full' },
    { path: 'registrarmateria', loadChildren: function () { return Promise.all(/*! import() | alumno-registrar-alumno-registrar-module */[__webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~41eedd00"), __webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~65087715"), __webpack_require__.e("alumno-registrar-alumno-registrar-module")]).then(__webpack_require__.bind(null, /*! ./alumno-registrar/alumno-registrar.module */ "./src/app/modules/alumnos/alumno-registrar/alumno-registrar.module.ts")).then(function (m) { return m.AlumnoRegistrarModule; }); } },
];
var AlumnosRoutingModule = /** @class */ (function () {
    function AlumnosRoutingModule() {
    }
    AlumnosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AlumnosRoutingModule);
    return AlumnosRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/alumnos/alumnos.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/alumnos/alumnos.module.ts ***!
  \***************************************************/
/*! exports provided: AlumnosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnosModule", function() { return AlumnosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alumnos-routing.module */ "./src/app/modules/alumnos/alumnos-routing.module.ts");




var AlumnosModule = /** @class */ (function () {
    function AlumnosModule() {
    }
    AlumnosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlumnosRoutingModule"],
            ]
        })
    ], AlumnosModule);
    return AlumnosModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-alumnos-alumnos-module-es5.js.map