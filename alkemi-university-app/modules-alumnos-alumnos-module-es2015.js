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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: 'consultarmateria', loadChildren: () => Promise.all(/*! import() | alumno-consultar-alumno-consultar-module */[__webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~41eedd00"), __webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~65087715"), __webpack_require__.e("alumno-consultar-alumno-consultar-module")]).then(__webpack_require__.bind(null, /*! ./alumno-consultar/alumno-consultar.module */ "./src/app/modules/alumnos/alumno-consultar/alumno-consultar.module.ts")).then(m => m.AlumnoConsultarModule) },
    { path: '', redirectTo: 'consultarmateria', pathMatch: 'full' },
    { path: 'registrarmateria', loadChildren: () => Promise.all(/*! import() | alumno-registrar-alumno-registrar-module */[__webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~41eedd00"), __webpack_require__.e("default~alumno-consultar-alumno-consultar-module~alumno-registrar-alumno-registrar-module~modules-fo~65087715"), __webpack_require__.e("alumno-registrar-alumno-registrar-module")]).then(__webpack_require__.bind(null, /*! ./alumno-registrar/alumno-registrar.module */ "./src/app/modules/alumnos/alumno-registrar/alumno-registrar.module.ts")).then(m => m.AlumnoRegistrarModule) },
];
let AlumnosRoutingModule = class AlumnosRoutingModule {
};
AlumnosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AlumnosRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alumnos-routing.module */ "./src/app/modules/alumnos/alumnos-routing.module.ts");




let AlumnosModule = class AlumnosModule {
};
AlumnosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlumnosRoutingModule"],
        ]
    })
], AlumnosModule);



/***/ })

}]);
//# sourceMappingURL=modules-alumnos-alumnos-module-es2015.js.map